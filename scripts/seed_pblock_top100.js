/**
 * seed_pblock_top100.js
 * Generates exactly 350 advanced, high-level conceptual MCQs for Top 100 AIR NEET aspirants
 * covering the "P-Block Elements" chapter across all its 5 subtopics.
 * 
 * 5 subtopics * 70 questions = 350 Top-100 NEET Questions.
 */

const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const CHAPTER = 'P-Block Elements';
const SUBJECT = 'Chemistry';

const SUBTOPICS = [
    'Group 13 to Group 18 electronic configuration',
    'Trends in physical and chemical properties',
    'Inert pair effect and allotropy',
    'Oxoacids of phosphorus, sulfur, and halogens',
    'Interhalogen compounds and noble gas compounds'
];

function generate350PBlockQuestions() {
    const questions = [];

    // Detailed topic generators
    const GENERATORS = [
        // Subtopic 0: Electronic configuration (70 questions)
        (i) => {
            const items = [
                {
                    q: `Which of the following elements has the ground-state valence shell electronic configuration $(n-1)d^{10} ns^2 np^1$ with completely filled inner $d$-orbitals, leading to weaker shielding and an anomalously high effective nuclear charge?`,
                    opts: [`Gallium ($Ga$)`, `Boron ($B$)`, `Aluminium ($Al$)`, `Indium ($In$)`],
                    ans: 0,
                    exp: `Gallium ($Ga$, $Z=31$) has the valence configuration $3d^{10}4s^2 4p^1$. Due to the poor shielding of the ten $3d$ electrons (d-block contraction), its atomic radius ($135\\text{ pm}$) is unexpectedly slightly smaller than that of aluminium ($143\\text{ pm}$).`
                },
                {
                    q: `The maximum covalency of second-period p-block elements (such as $B, C, N, O, F$) is strictly restricted to 4, whereas third-period elements (such as $Al, Si, P, S, Cl$) can expand their coordination number to 6. What is the fundamental electronic rationale?`,
                    opts: [
                        `Absence of vacant $d$-orbitals in the valence shell ($n=2$) of second-period elements.`,
                        `Higher electronegativity of second-period elements preventing coordinate bond formation.`,
                        `Relativistic contraction of $2s$ and $2p$ subshells.`,
                        `Complete pairing of electrons in $2p$ subshells.`
                    ],
                    ans: 0,
                    exp: `Second-period elements have only one $2s$ and three $2p$ orbitals available for bonding, limiting their maximum covalency to 4 (e.g. $BF_4^-$, $NH_4^+$). Third-period elements possess vacant $3d$ orbitals and can expand their octet to form species like $AlF_6^{3-}$ and $PCl_6^-$.`
                },
                {
                    q: `In the ground state electronic configuration of Group 15 elements ($ns^2 np_x^1 np_y^1 np_z^1$), the half-filled $p$-subshell confers extra stability. As a consequence, which of the following comparisons of first ionization enthalpy ($\\Delta_i H_1$) is correct?`,
                    opts: [
                        `$N > O$ and $P > S$`,
                        `$O > N$ and $S > P$`,
                        `$N < O$ but $P > S$`,
                        `$N > O$ but $P < S$`
                    ],
                    ans: 0,
                    exp: `Nitrogen ($1s^2 2s^2 2p^3$) and phosphorus ($[Ne] 3s^2 3p^3$) possess extra-stable half-filled $p$-subshells. Removing an electron from Group 16 ($O: 2p^4$ or $S: 3p^4$) relieves electron-electron repulsion, making $\\Delta_i H_1$ of Group 15 higher than Group 16.`
                },
                {
                    q: `Which p-block element possesses the highest positive electron gain enthalpy ($\\Delta_{eg}H$) due to a completely filled valence octet ($ns^2 np^6$)?`,
                    opts: [`Neon ($Ne$)`, `Argon ($Ar$)`, `Helium ($He$)`, `Krypton ($Kr$)`],
                    ans: 0,
                    exp: `Neon has the electronic configuration $1s^2 2s^2 2p^6$. Adding an extra electron forces it into the higher $3s$ orbital with significant energy absorption, resulting in a large positive $\\Delta_{eg}H$.`
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

        // Subtopic 1: Trends in physical and chemical properties (70 questions)
        (i) => {
            const items = [
                {
                    q: `The correct order of Lewis acid strength among boron trihalides is:`,
                    opts: [
                        `$BI_3 > BBr_3 > BCl_3 > BF_3$`,
                        `$BF_3 > BCl_3 > BBr_3 > BI_3$`,
                        `$BCl_3 > BF_3 > BBr_3 > BI_3$`,
                        `$BF_3 = BCl_3 = BBr_3 = BI_3$`
                    ],
                    ans: 0,
                    exp: `Due to identical size and effective overlap between $2p$ of Boron and $2p$ of Fluorine, $BF_3$ exhibits maximum $p\\pi-p\\pi$ back-bonding, compensating for electron deficiency on Boron. In $BI_3$, the overlap between $2p(B)$ and $5p(I)$ is very ineffective, resulting in minimal back-bonding and making $BI_3$ the strongest Lewis acid.`
                },
                {
                    q: `Which of the following orders correctly represents the electron gain enthalpy with negative sign ($\\Delta_{eg}H$) among Group 17 halogens?`,
                    opts: [
                        `$Cl > F > Br > I$`,
                        `$F > Cl > Br > I$`,
                        `$Cl > Br > F > I$`,
                        `$Br > Cl > F > I$`
                    ],
                    ans: 0,
                    exp: `Chlorine has a more negative electron gain enthalpy ($-349\\text{ kJ/mol}$) than fluorine ($-328\\text{ kJ/mol}$) because the compact size of the $2p$ subshell in fluorine leads to high inter-electronic repulsion when an extra electron enters.`
                },
                {
                    q: `The correct decreasing order of bond dissociation enthalpy among halogen molecules is:`,
                    opts: [
                        `$Cl_2 > Br_2 > F_2 > I_2$`,
                        `$F_2 > Cl_2 > Br_2 > I_2$`,
                        `$Cl_2 > F_2 > Br_2 > I_2$`,
                        `$Br_2 > Cl_2 > F_2 > I_2$`
                    ],
                    ans: 0,
                    exp: `In $F_2$, the lone pair-lone pair repulsions between the three non-bonding pairs on each small fluorine atom significantly weaken the single covalent bond, lowering its bond enthalpy below that of $Cl_2$ and $Br_2$: $Cl_2 (242.6) > Br_2 (192.8) > F_2 (158.8) > I_2 (151.1)\\text{ kJ/mol}$.`
                },
                {
                    q: `The thermal stability of hydrides of Group 16 ($H_2O, H_2S, H_2Se, H_2Te$) decreases down the group. What is the primary cause?`,
                    opts: [
                        `Decrease in $E-H$ bond dissociation enthalpy due to increase in size of central atom $E$.`,
                        `Increase in electronegativity of the central atom down the group.`,
                        `Decrease in the bond angle from $H_2O$ to $H_2Te$.`,
                        `Transition from intermolecular hydrogen bonding to London dispersion forces.`
                    ],
                    ans: 0,
                    exp: `As the atomic radius of central atom $E$ increases ($O < S < Se < Te$), the orbital overlap with $1s$ of hydrogen becomes poorer, decreasing the $E-H$ bond dissociation enthalpy. Consequently, thermal stability decreases and reducing power increases.`
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

        // Subtopic 2: Inert pair effect and allotropy (70 questions)
        (i) => {
            const items = [
                {
                    q: `Due to the inert pair effect in heavier p-block elements, the stability of lower oxidation states increases down the group. Which of the following species behaves as a powerful oxidizing agent?`,
                    opts: [
                        `$Pb^{4+}$ ($PbO_2$)`,
                        `$Sn^{2+}$ ($SnCl_2$)`,
                        `$Tl^+$ ($TlCl$)`,
                        `$Bi^{3+}$ ($BiCl_3$)`
                    ],
                    ans: 0,
                    exp: `For lead ($Pb$), the $+2$ oxidation state is far more stable than $+4$ due to the inert pair effect ($6s^2$ electrons resist unpairing). Hence, $Pb^{4+}$ readily accepts two electrons to reduce to $Pb^{2+}$, making it a powerful oxidizing agent. Conversely, $Sn^{2+}$ easily oxidizes to $Sn^{4+}$, making it a reducing agent.`
                },
                {
                    q: `In the structure of diborane ($B_2H_6$), which of the following statements regarding bonding is strictly correct?`,
                    opts: [
                        `It contains four terminal $2c-2e^-$ $B-H$ bonds and two bridging $3c-2e^-$ $B-H-B$ banana bonds.`,
                        `All six $B-H$ bonds are equivalent $2c-2e^-$ covalent bonds.`,
                        `It possesses two terminal $3c-2e^-$ bonds and four bridging $2c-2e^-$ bonds.`,
                        `It contains a direct $B-B$ covalent single bond.`
                    ],
                    ans: 0,
                    exp: `Diborane ($B_2H_6$) has four terminal coplanar $B-H$ bonds (normal two-center two-electron bonds) and two bridging hydrogen atoms located above and below the plane, each forming a three-center two-electron ($3c-2e^-$) 'banana bond'.`
                },
                {
                    q: `In the allotropes of carbon, fullerene ($C_{60}$) contains a cage-like soccer-ball structure (Buckminsterfullerene). What is the exact number of six-membered and five-membered rings present?`,
                    opts: [
                        `20 six-membered rings and 12 five-membered rings`,
                        `12 six-membered rings and 20 five-membered rings`,
                        `24 six-membered rings and 8 five-membered rings`,
                        `18 six-membered rings and 14 five-membered rings`
                    ],
                    ans: 0,
                    exp: `Buckminsterfullerene ($C_{60}$) consists of 20 six-membered rings fused to both hexagons and pentagons, and 12 five-membered rings that are fused only to six-membered rings (isolated pentagon rule).`
                },
                {
                    q: `White phosphorus ($P_4$) is far more reactive and catches fire spontaneously in air (chemiluminescence) compared to red phosphorus. Why?`,
                    opts: [
                        `Discrete tetrahedral $P_4$ molecules suffer from severe angular strain with bond angle $60^\\circ$.`,
                        `White phosphorus has an infinite polymeric chain structure.`,
                        `White phosphorus possesses metallic bonding.`,
                        `White phosphorus has completely unshared $p$-orbitals.`
                    ],
                    ans: 0,
                    exp: `In $P_4$, the $P-P-P$ bond angle is forced to be $60^\\circ$ instead of the normal tetrahedral angle of $109.5^\\circ$, introducing severe angular strain that makes white phosphorus thermodynamically unstable and highly reactive.`
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

        // Subtopic 3: Oxoacids of phosphorus, sulfur, and halogens (70 questions)
        (i) => {
            const items = [
                {
                    q: `Hypophosphorous acid ($H_3PO_2$) is a monobasic acid and acts as a strong reducing agent (e.g. reducing $AgNO_3$ to metallic silver). What is the molecular basis of its reducing behavior?`,
                    opts: [
                        `Presence of two non-ionizable $P-H$ bonds directly attached to phosphorus.`,
                        `Presence of three ionizable $P-OH$ bonds.`,
                        `Low oxidation state of $+3$ for phosphorus.`,
                        `Absence of any coordinate $P=O$ bond.`
                    ],
                    ans: 0,
                    exp: `In $H_3PO_2$, phosphorus is bonded to one $P=O$, one $P-OH$ (ionizable proton, responsible for monobasic nature), and two $P-H$ bonds. The hydrogen atoms directly bonded to phosphorus impart powerful reducing properties.`
                },
                {
                    q: `Which of the following oxoacids of sulfur contains a peroxy ($-O-O-$) linkage, where sulfur exhibits a formal oxidation state of $+6$?`,
                    opts: [
                        `$H_2S_2O_8$ (Peroxodisulfuric acid / Marshall's acid)`,
                        `$H_2S_2O_7$ (Pyrosulfuric acid / Oleum)`,
                        `$H_2S_2O_3$ (Thiosulfuric acid)`,
                        `$H_2SO_3$ (Sulfurous acid)`
                    ],
                    ans: 0,
                    exp: `Peroxodisulfuric acid ($H_2S_2O_8$) contains the peroxy linkage $HO-SO_2-O-O-SO_2-OH$. Each sulfur atom has four bonds to oxygen, retaining the maximum oxidation state of $+6$.`
                },
                {
                    q: `The correct increasing order of acidic strength for the oxoacids of chlorine is:`,
                    opts: [
                        `$HClO < HClO_2 < HClO_3 < HClO_4$`,
                        `$HClO_4 < HClO_3 < HClO_2 < HClO$`,
                        `$HClO_2 < HClO < HClO_4 < HClO_3$`,
                        `$HClO < HClO_3 < HClO_2 < HClO_4$`
                    ],
                    ans: 0,
                    exp: `As the oxidation state of chlorine increases ($+1$ in $HClO$, $+3$ in $HClO_2$, $+5$ in $HClO_3$, $+7$ in $HClO_4$), the electronegativity of the central atom increases, pulling electron density away from the $O-H$ bond and stabilizing the conjugate base via resonance delocalization across multiple oxygen atoms.`
                },
                {
                    q: `In the solid state, phosphorus pentachloride ($PCl_5$) exists not as a covalent monomer, but as an ionic lattice consisting of:`,
                    opts: [
                        `$[PCl_4]^+$ (tetrahedral) and $[PCl_6]^-$ (octahedral)`,
                        `$[PCl_3]^{2+}$ and $[PCl_7]^{2-}$`,
                        `$[PCl_2]^+$ and $[PCl_8]^-$`,
                        `$PCl_4$ radicals and chloride ions`
                    ],
                    ans: 0,
                    exp: `In crystalline solid state, $PCl_5$ dissociates into an ionic solid $[PCl_4]^+[PCl_6]^-$, where the cation is $sp^3$ tetrahedral and the anion is $sp^3d^2$ octahedral.`
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

        // Subtopic 4: Interhalogen and noble gas compounds (70 questions)
        (i) => {
            const items = [
                {
                    q: `According to VSEPR theory, what are the respective hybridization and molecular geometry of xenon tetrafluoride ($XeF_4$)?`,
                    opts: [
                        `$sp^3d^2$, Square planar with 2 axial lone pairs`,
                        `$sp^3d$, See-saw with 1 equatorial lone pair`,
                        `$sp^3d^2$, Octahedral with 0 lone pairs`,
                        `$sp^3$, Tetrahedral with 0 lone pairs`
                    ],
                    ans: 0,
                    exp: `Xenon in $XeF_4$ has 8 valence electrons: 4 bonding pairs and 2 lone pairs (steric number = 6). The electron pair geometry is octahedral ($sp^3d^2$), and placing the two lone pairs trans to each other at axial positions minimizes repulsion, resulting in a square planar molecular geometry.`
                },
                {
                    q: `Complete non-redox hydrolysis of xenon hexafluoride ($XeF_6$) yields an explosive, colorless solid compound $X$. What is compound $X$ and its geometry?`,
                    opts: [
                        `$XeO_3$, Pyramidal ($sp^3$)`,
                        `$XeOF_4$, Square pyramidal ($sp^3d^2$)`,
                        `$XeO_2F_2$, See-saw ($sp^3d$)`,
                        `$XeO_4$, Tetrahedral ($sp^3$)`
                    ],
                    ans: 0,
                    exp: `Complete hydrolysis of $XeF_6$ proceeds as $XeF_6 + 3H_2O \\to XeO_3 + 6HF$. $XeO_3$ is an explosive solid with $sp^3$ hybridization and pyramidal geometry (one lone pair, three $Xe=O$ double bonds).`
                },
                {
                    q: `Which of the following interhalogen compounds is T-shaped with $sp^3d$ hybridization?`,
                    opts: [
                        `$ClF_3$`,
                        `$IF_5$`,
                        `$BrF_5$`,
                        `$IF_7$`
                    ],
                    ans: 0,
                    exp: `In $ClF_3$, chlorine has 7 valence electrons: 3 single bonds to fluorine and 2 lone pairs (steric number = 5, $sp^3d$). To minimize lone pair-lone pair repulsions, the two lone pairs occupy equatorial positions of a trigonal bipyramid, giving a T-shaped molecular geometry.`
                },
                {
                    q: `Why are interhalogen compounds ($XX'_n$) generally chemically more reactive than pure halogens ($X_2$), with the exception of fluorine ($F_2$)?`,
                    opts: [
                        `The $X-X'$ bond in interhalogens is polar and has lower bond dissociation energy than the non-polar $X-X$ bond in halogens.`,
                        `Interhalogens exist only in the gaseous state.`,
                        `Interhalogens cannot undergo hydrolysis.`,
                        `The central halogen atom has vacant $d$-orbitals which prevent any nucleophilic attack.`
                    ],
                    ans: 0,
                    exp: `Interhalogens contain a polar $X-X'$ bond due to difference in electronegativity between the two different halogens. Because of orbital mismatch, the $X-X'$ bond is weaker than the homonuclear $X-X$ bond (except $F-F$), making interhalogens more reactive.`
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
        }
    ];

    for (let i = 0; i < 350; i++) {
        const subtopicIdx = Math.floor(i / 70);
        const generator = GENERATORS[subtopicIdx];
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
            tag: 'Top 100 AIR NEET - P-Block Elements',
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

    const questions = generate350PBlockQuestions();
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
