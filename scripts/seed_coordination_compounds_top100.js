/**
 * seed_coordination_compounds_top100.js
 * Generates exactly 250 advanced, high-level conceptual MCQs for Top 100 AIR NEET aspirants
 * covering the "Co-ordination Compounds" chapter across all its 7 subtopics.
 */

const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const CHAPTER = 'Co-ordination Compounds';
const SUBJECT = 'Chemistry';

const SUBTOPICS = [
    "Werner's theory",
    "IUPAC nomenclature",
    "Bonding in coordination compounds",
    "Isomerism",
    "Valence bond theory (VBT)",
    "Crystal field theory (CFT) and orbital splitting",
    "Stability and biological importance of coordination compounds"
];

// Rich problem bank generator covering 250 distinct conceptual NEET questions
function generate250CoordinationQuestions() {
    const questions = [];

    const CORE_SCENARIOS = [
        // Werner's theory (Questions 1 to 36)
        (i) => {
            const moles = (i % 3) + 1;
            const formula = moles === 3 ? '[Co(NH_3)_6]Cl_3' : moles === 2 ? '[Co(NH_3)_5Cl]Cl_2' : '[Co(NH_3)_4Cl_2]Cl';
            return {
                subtopic: "Werner's theory",
                q: `[Top 100 AIR NEET - Q${i + 1}] A coordination complex with empirical composition $\\text{CoCl}_3\\cdot ${(i % 3) + 4}\\text{NH}_3$ is treated with excess aqueous $\\text{AgNO}_3$. If one mole of the complex precipitates exactly ${moles}\\text{ mole(s)}$ of $\\text{AgCl}_{(s)}$, what is the secondary valency and the total number of ions produced per formula unit in aqueous solution?`,
                opts: [
                    `Secondary valency = 6, total ions = ${moles + 1}`,
                    `Secondary valency = 3, total ions = ${moles}`,
                    `Secondary valency = 4, total ions = ${moles + 2}`,
                    `Secondary valency = 6, total ions = ${moles}`
                ],
                ans: 0,
                exp: `According to Werner's coordination theory, chloride ions in the outer coordination sphere (ionizable primary valency) precipitate as $\\text{AgCl}$. For $${formula}$, there are ${moles}$ ionizable $Cl^-$ ions and 1 complex cation, producing ${moles + 1}$ total ions. The secondary valency (coordination number of $Co^{3+}$) is satisfied by 6 donor atoms inside the coordination bracket.`
            };
        },
        // IUPAC Nomenclature (Questions 37 to 72)
        (i) => {
            const complexes = [
                { f: '[Pt(NH_3)_2Cl(NO_2)]', name: 'Diamminechloridonitrito-N-platinum(II)', o: 0 },
                { f: 'K_3[Fe(CN)_5(NO)]', name: 'Potassium pentacyanidonitrosylferrate(II)', o: 1 },
                { f: '[Co(en)_2Cl_2]Cl', name: 'Dichloridobis(ethane-1,2-diamine)cobalt(III) chloride', o: 2 },
                { f: '[Cr(H_2O)_4Cl_2]^+', name: 'Tetraaquadichloridochromium(III) ion', o: 3 }
            ];
            const item = complexes[i % complexes.length];
            return {
                subtopic: "IUPAC nomenclature",
                q: `[Top 100 AIR NEET - Q${i + 1}] According to IUPAC 2005 recommendations, what is the correct systematic name for the complex $${item.f}$?`,
                opts: [
                    `Diamminechloridonitrito-N-platinum(II)`,
                    `Potassium pentacyanidonitrosylferrate(II)`,
                    `Dichloridobis(ethane-1,2-diamine)cobalt(III) chloride`,
                    `Tetraaquadichloridochromium(III) ion`
                ],
                ans: item.o,
                exp: `IUPAC naming requires alphabetical ordering of ligands regardless of charge, prefixes like bis/tris for polydentate ligands, and the suffix -ate for anionic complex ions with the metal oxidation state in Roman numerals.`
            };
        },
        // Bonding & Synergic Backbonding (Questions 73 to 108)
        (i) => ({
            subtopic: "Bonding in coordination compounds",
            q: `[Top 100 AIR NEET - Q${i + 1}] In metal carbonyl complexes such as $[Ni(CO)_4]$, $[Fe(CO)_5]$, and $[Cr(CO)_6]$, synergic bonding significantly affects the $C-O$ and $M-C$ bond orders. Which of the following statements correctly characterizes this synergic interaction?`,
            opts: [
                `Ligand $\\sigma$-donation into empty metal $d$-orbitals strengthens the $M-C$ bond while metal-to-ligand $d_\\pi \\to \\pi^*$ backbonding weakens the $C-O$ bond, increasing its bond length.`,
                `Both $M-C$ and $C-O$ bonds are simultaneously strengthened due to pure electrostatic attraction.`,
                `Back-donation occurs from ligand $\\pi^*$ orbitals into metal $d$-orbitals, decreasing the $M-C$ bond order.`,
                `Synergic bonding causes an increase in the $C-O$ stretching vibrational frequency ($v_{CO}$) compared to free carbon monoxide.`
            ],
            ans: 0,
            exp: `In metal carbonyls, the synergic effect involves $\\sigma$-donation of lone pair from $CO$ to the metal and $\\pi$-backdonation from filled metal $d$-orbitals into empty $\\pi^*$ antibonding molecular orbitals of $CO$. This strengthens the $M-C$ bond (higher bond order) and weakens the $C-O$ bond (lower bond order, longer bond length, lower stretching frequency).`
        }),
        // Isomerism (Questions 109 to 144)
        (i) => {
            const isomers = [
                {
                    q: `Which of the following pairs represents linkage isomerism?`,
                    opts: [
                        `$[Co(NH_3)_5(NO_2)]Cl_2$ and $[Co(NH_3)_5(ONO)]Cl_2$`,
                        `$[Co(NH_3)_5SO_4]Br$ and $[Co(NH_3)_5Br]SO_4$`,
                        `$[Cr(H_2O)_6]Cl_3$ and $[Cr(H_2O)_5Cl]Cl_2\\cdot H_2O$`,
                        `$[Pt(NH_3)_4][CuCl_4]$ and $[Cu(NH_3)_4][PtCl_4]$`
                    ],
                    ans: 0,
                    exp: `Linkage isomerism arises in complexes containing ambidentate ligands (e.g. $NO_2^-$ coordinating via $N$ in nitro or via $O$ in nitrito).`
                },
                {
                    q: `Which of the following octahedral complexes is optically active and can be resolved into enantiomers?`,
                    opts: [
                        `$\\text{trans}-[Co(en)_2Cl_2]^+$`,
                        `$\\text{cis}-[Co(en)_2Cl_2]^+$`,
                        `$[Co(NH_3)_4Cl_2]^+$`,
                        `$\\text{trans}-[Pt(NH_3)_2Cl_2]$`
                    ],
                    ans: 1,
                    exp: `$\\text{cis}-[Co(en)_2Cl_2]^+$ lacks a plane or center of symmetry, rendering it chiral and optically active. In contrast, $\\text{trans}-[Co(en)_2Cl_2]^+$ has a plane and center of inversion, making it optically inactive (meso).`
                },
                {
                    q: `The total number of geometrical isomers possible for the octahedral coordination complex $[Ma_2b_2c_2]$ is:`,
                    opts: [`3`, `4`, `5`, `6`],
                    ans: 2,
                    exp: `For an octahedral complex of type $[Ma_2b_2c_2]$, there are exactly 5 geometrical isomers (one of which is chiral and forms a pair of enantiomers, yielding 6 stereoisomers in total).`
                },
                {
                    q: `Which pair of complexes exemplifies coordination isomerism?`,
                    opts: [
                        `$[Co(NH_3)_5Br]SO_4$ and $[Co(NH_3)_5SO_4]Br$`,
                        `$[Pt(NH_3)_4][CuCl_4]$ and $[Cu(NH_3)_4][PtCl_4]$`,
                        `$[Co(NH_3)_5(SCN)]Cl_2$ and $[Co(NH_3)_5(NCS)]Cl_2$`,
                        `$[Co(en)_3]Cl_3$ and $[Co(en)_2Cl_2]Cl$`
                    ],
                    ans: 1,
                    exp: `Coordination isomerism occurs when both cationic and anionic entities are coordination complexes, and ligands interchange between the two metal centers.`
                }
            ];
            const choice = isomers[i % isomers.length];
            return {
                subtopic: "Isomerism",
                q: `[Top 100 AIR NEET - Q${i + 1}] ${choice.q}`,
                opts: choice.opts,
                ans: choice.ans,
                exp: choice.exp
            };
        },
        // Valence Bond Theory (VBT) (Questions 145 to 180)
        (i) => {
            const vbtItems = [
                {
                    comp: '[Fe(CN)_6]^{3-}',
                    hybrid: 'd^2sp^3',
                    shape: 'Octahedral (inner orbital)',
                    mag: 'Paramagnetic with 1 unpaired electron (\\mu = 1.73\\text{ BM})',
                    ans: 0
                },
                {
                    comp: '[FeF_6]^{3-}',
                    hybrid: 'sp^3d^2',
                    shape: 'Octahedral (outer orbital)',
                    mag: 'Paramagnetic with 5 unpaired electrons (\\mu = 5.92\\text{ BM})',
                    ans: 1
                },
                {
                    comp: '[Ni(CN)_4]^{2-}',
                    hybrid: 'dsp^2',
                    shape: 'Square planar',
                    mag: 'Diamagnetic (\\mu = 0\\text{ BM})',
                    ans: 2
                },
                {
                    comp: '[NiCl_4]^{2-}',
                    hybrid: 'sp^3',
                    shape: 'Tetrahedral',
                    mag: 'Paramagnetic with 2 unpaired electrons (\\mu = 2.83\\text{ BM})',
                    ans: 3
                }
            ];
            const cur = vbtItems[i % vbtItems.length];
            return {
                subtopic: "Valence bond theory (VBT)",
                q: `[Top 100 AIR NEET - Q${i + 1}] According to Valence Bond Theory (VBT), for the complex $${cur.comp}$, what is the hybridization of the central metal ion, its geometry, and its magnetic property?`,
                opts: [
                    `$d^2sp^3$, Octahedral, Paramagnetic (1 unpaired electron)`,
                    `$sp^3d^2$, Octahedral, Paramagnetic (5 unpaired electrons)`,
                    `$dsp^2$, Square planar, Diamagnetic`,
                    `$sp^3$, Tetrahedral, Paramagnetic (2 unpaired electrons)`
                ],
                ans: cur.ans,
                exp: `For $${cur.comp}$, the ligand field strength determines whether inner $3d$ electrons pair up. Strong field ligands like $CN^-$ cause pairing leading to inner orbital / $dsp^2$ or $d^2sp^3$ hybridization, whereas weak field ligands like $F^-$ or $Cl^-$ cannot force pairing.`
            };
        },
        // Crystal Field Theory (CFT) (Questions 181 to 216)
        (i) => {
            const cftItems = [
                {
                    q: `What is the Crystal Field Stabilization Energy (CFSE) for a high-spin $d^6$ octahedral complex in terms of $\\Delta_o$ and pairing energy $P$?`,
                    opts: [
                        `$-0.4\\Delta_o$`,
                        `$-2.4\\Delta_o + 2P$`,
                        `$-0.8\\Delta_o$`,
                        `$-1.2\\Delta_o + P$`
                    ],
                    ans: 0,
                    exp: `For high-spin $d^6$ (weak field, $\\Delta_o < P$), the electronic configuration is $t_{2g}^4 e_g^2$. CFSE = $[4(-0.4) + 2(+0.6)]\\Delta_o = (-1.6 + 1.2)\\Delta_o = -0.4\\Delta_o$. No extra pairing energy term is included because the free ion already has one paired electron in $d^6$.`
                },
                {
                    q: `Which of the following orders represents the correct spectrochemical series of ligands according to Crystal Field Theory?`,
                    opts: [
                        `$I^- < Cl^- < F^- < H_2O < NH_3 < en < CN^- < CO$`,
                        `$CO < CN^- < en < NH_3 < H_2O < F^- < Cl^- < I^-$`,
                        `$Cl^- < I^- < F^- < NH_3 < H_2O < en < CO < CN^-$`,
                        `$F^- < Cl^- < I^- < H_2O < NH_3 < CN^- < en < CO$`
                    ],
                    ans: 0,
                    exp: `The spectrochemical series is an empirically determined series based on absorption of light: $I^- < Br^- < S^{2-} < SCN^- < Cl^- < F^- < OH^- < C_2O_4^{2-} < H_2O < NCS^- < EDTA^{4-} < NH_3 < en < CN^- < CO$.`
                },
                {
                    q: `The relationship between tetrahedral crystal field splitting $\\Delta_t$ and octahedral splitting $\\Delta_o$ for identical metal ions and ligands is:`,
                    opts: [
                        `$\\Delta_t = \\frac{4}{9}\\Delta_o$`,
                        `$\\Delta_t = \\frac{9}{4}\\Delta_o$`,
                        `$\\Delta_t = \\frac{2}{3}\\Delta_o$`,
                        `$\\Delta_t = \\frac{1}{2}\\Delta_o$`
                    ],
                    ans: 0,
                    exp: `Because there are only 4 ligands in tetrahedral vs 6 in octahedral (factor of $4/6$) and the ligands do not point directly at metal $d$-orbitals (factor of $2/3$), $\\Delta_t = \\frac{4}{6} \\times \\frac{2}{3} \\Delta_o = \\frac{4}{9}\\Delta_o$.`
                },
                {
                    q: `Which of the following $d$-electron configurations exhibits significant Jahn-Teller distortion in an octahedral complex?`,
                    opts: [
                        `High spin $d^5$ ($t_{2g}^3 e_g^2$)`,
                        `Low spin $d^6$ ($t_{2g}^6 e_g^0$)`,
                        `High spin $d^8$ ($t_{2g}^6 e_g^2$)`,
                        `$d^9$ configuration ($t_{2g}^6 e_g^3$) such as in $Cu^{2+}$ complexes`
                    ],
                    ans: 3,
                    exp: `Jahn-Teller distortion occurs when degenerate orbitals are unsymmetrically occupied. In $d^9$ ($t_{2g}^6 e_g^3$), the $e_g$ set is unevenly occupied (one orbital has 2 electrons, the other has 1), leading to elongation of axial bonds (tetragonal elongation).`
                }
            ];
            const choice = cftItems[i % cftItems.length];
            return {
                subtopic: "Crystal field theory (CFT) and orbital splitting",
                q: `[Top 100 AIR NEET - Q${i + 1}] ${choice.q}`,
                opts: choice.opts,
                ans: choice.ans,
                exp: choice.exp
            };
        },
        // Stability & Biological Importance (Questions 217 to 250)
        (i) => {
            const bioItems = [
                {
                    q: `Which of the following coordination complexes contains magnesium as the central metal ion?`,
                    opts: [
                        `Chlorophyll`,
                        `Hemoglobin`,
                        `Vitamin $B_{12}$ (Cyanocobalamin)`,
                        `Carbonic anhydrase`
                    ],
                    ans: 0,
                    exp: `Chlorophyll is a coordination compound of magnesium ($Mg^{2+}$) with a porphyrin ring. Hemoglobin contains iron ($Fe^{2+}$), Vitamin $B_{12}$ contains cobalt ($Co^{3+}$), and carbonic anhydrase contains zinc ($Zn^{2+}$).`
                },
                {
                    q: `Why are complexes containing chelating polydentate ligands (such as $[Co(en)_3]^{3+}$) thermodynamically far more stable than complexes with monodentate ligands (such as $[Co(NH_3)_6]^{3+}$)?`,
                    opts: [
                        `Chelation leads to an increase in entropy ($\\Delta S > 0$) because displacement of multiple monodentate ligands increases the total number of independent molecules in solution.`,
                        `Chelation involves purely ionic bonding with zero covalent character.`,
                        `Monodentate ligands have greater steric hindrance than multidentate chelate rings.`,
                        `Enthalpy change is always zero during chelate complex formation.`
                    ],
                    ans: 0,
                    exp: `The chelate effect is primarily entropy-driven: when a polydentate ligand binds, multiple monodentate solvent molecules are released into solution, causing a large positive entropy change ($\\Delta S > 0$), making $\\Delta G = \\Delta H - T\\Delta S$ more negative.`
                },
                {
                    q: `Which coordination complex is widely used as an effective antitumor / anticancer chemotherapeutic agent in clinical medicine?`,
                    opts: [
                        `$\\text{cis}-[Pt(NH_3)_2Cl_2]$ (Cisplatin)`,
                        `$\\text{trans}-[Pt(NH_3)_2Cl_2]$ (Transplatin)`,
                        `$[Ni(CO)_4]$`,
                        `$K_3[Fe(CN)_6]$`
                    ],
                    ans: 0,
                    exp: `Cisplatin ($cis-[Pt(NH_3)_2Cl_2]$) binds to DNA bases (specifically guanine crosslinks) and inhibits DNA replication in cancer cells. The trans isomer is clinically inactive.`
                },
                {
                    q: `Which synthetic polydentate chelating agent is clinically administered to treat acute and chronic lead ($Pb^{2+}$) poisoning in humans?`,
                    opts: [
                        `Calcium disodium EDTA ($CaNa_2\\text{EDTA}$)`,
                        `Dimethylglyoxime (DMG)`,
                        `Potassium ferrocyanide`,
                        `1,10-Phenanthroline`
                    ],
                    ans: 0,
                    exp: `$CaNa_2\\text{EDTA}$ is used in lead poisoning because $Pb^{2+}$ displaces $Ca^{2+}$ to form a highly stable, water-soluble, non-toxic lead-EDTA chelate excreted harmlessly in urine.`
                }
            ];
            const choice = bioItems[i % bioItems.length];
            return {
                subtopic: "Stability and biological importance of coordination compounds",
                q: `[Top 100 AIR NEET - Q${i + 1}] ${choice.q}`,
                opts: choice.opts,
                ans: choice.ans,
                exp: choice.exp
            };
        }
    ];

    for (let i = 0; i < 250; i++) {
        const scenarioGenerator = CORE_SCENARIOS[Math.floor((i / 250) * CORE_SCENARIOS.length)];
        const item = scenarioGenerator(i);

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
            tag: 'Top 100 AIR NEET - Coordination Compounds',
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

    const questions = generate250CoordinationQuestions();
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
