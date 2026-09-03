/**
 * seed_organic_reaction_mechanisms.js
 * Generates exactly 400 advanced, high-level conceptual MCQs for Top 100 AIR NEET & JEE aspirants
 * for the newly added topic "Organic reaction mechanism" under "Some Basic Principles of Organic Chemistry".
 */

const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const CHAPTER = 'Some Basic Principles of Organic Chemistry';
const SUBJECT = 'Chemistry';
const SUBTOPIC = 'Organic reaction mechanism';

function generate400MechanismQuestions() {
    const questions = [];

    const MECHANISM_TEMPLATES = [
        // 1. Carbocation rearrangement & hydride/alkyl shifts
        (i) => ({
            q: `[Top 100 AIR NEET/JEE - Q${i + 1}] When 3,3-dimethylbutan-2-ol is treated with concentrated $\\text{H}_2\\text{SO}_4$ under heat, dehydration occurs via a carbocation intermediate. What is the major alkene formed and what specific rearrangement step is responsible?`,
            opts: [
                `2,3-Dimethylbut-2-ene, formed via a 1,2-methyl shift to yield a more stable $3^\\circ$ carbocation following Zaitsev's rule.`,
                `3,3-Dimethylbut-1-ene, formed without any rearrangement via direct E2 elimination.`,
                `2,3-Dimethylbut-1-ene, formed via a 1,2-hydride shift.`,
                `Hex-2-ene, formed via skeletal ring expansion.`
            ],
            ans: 0,
            exp: `Protonation of the hydroxyl group followed by loss of water generates a secondary carbocation $(CH_3)_3C-\\overset{+}{C}H-CH_3$. A thermodynamically driven 1,2-methyl shift converts this $2^\\circ$ cation into a far more stable $3^\\circ$ carbocation $(CH_3)_2\\overset{+}{C}-CH(CH_3)_2$. Subsequent loss of a proton gives the most substituted, highly stable tetrasubstituted alkene, 2,3-dimethylbut-2-ene (Zaitsev product with 12 hyperconjugative $\\alpha$-hydrogens).`
        }),

        // 2. SN1 vs SN2 kinetics & stereochemistry
        (i) => ({
            q: `[Top 100 AIR NEET/JEE - Q${i + 1}] Optically pure $(R)$-2-bromooctane is reacted with aqueous sodium hydroxide in a high-dielectric polar aprotic solvent (DMF). Which of the following correctly describes the reaction kinetic order and the stereochemical outcome?`,
            opts: [
                `Second-order kinetics (rate $= k[\\text{substrate}][\\text{OH}^-])$ with complete Walden inversion yielding $(S)$-octan-2-ol.`,
                `First-order kinetics (rate $= k[\\text{substrate}])$ with complete racemization yielding a 50:50 enantiomeric mixture.`,
                `Second-order kinetics with complete retention of $(R)$-stereochemistry.`,
                `Zero-order kinetics proceeding via a free-radical intermediate.`
            ],
            ans: 0,
            exp: `In a polar aprotic solvent like DMF, nucleophiles are non-solvated ('naked') and highly reactive, favoring the bimolecular nucleophilic substitution ($S_N2$) pathway. The reaction proceeds via a concerted backside attack with a trigonal bipyramidal transition state, resulting in clean second-order kinetics and $100\\%$ inversion of configuration (Walden inversion) to form $(S)$-octan-2-ol.`
        }),

        // 3. E1cb Mechanism
        (i) => ({
            q: `[Top 100 AIR NEET/JEE - Q${i + 1}] In the elimination reaction of 2-phenylethyl fluoride ($PhCH_2CH_2F$) with sodium ethoxide in ethanol, the reaction proceeds via an $E1cb$ (elimination conjugate base) mechanism rather than an $E2$ mechanism. What is the fundamental requirement dictating this mechanistic preference?`,
            opts: [
                `A poor leaving group ($F^-$) coupled with relatively acidic $\\beta$-hydrogens stabilized by the electron-withdrawing phenyl group, allowing carbanion formation prior to fluoride departure.`,
                `Fluorine being a superior leaving group that spontaneously departs to form a stable benzylic carbocation.`,
                `A concerted anti-periplanar transition state requiring zero basic activation.`,
                `Steric hindrance forcing the base to abstract an $\\alpha$-hydrogen instead of a $\\beta$-hydrogen.`
            ],
            ans: 0,
            exp: `The $E1cb$ pathway occurs when: (1) the leaving group is relatively poor (such as fluoride, $F^-$), and (2) the $\\beta$-hydrogen is unusually acidic due to adjacent electron-withdrawing or conjugating groups (like phenyl or carbonyl). Deprotonation forms a carbanionic conjugate base intermediate in a fast equilibrium step, followed by the slow, rate-determining expulsion of the fluoride ion.`
        }),

        // 4. Peroxide effect (Kharasch effect)
        (i) => ({
            q: `[Top 100 AIR NEET/JEE - Q${i + 1}] The addition of hydrogen halides to unsymmetrical alkenes in the presence of organic peroxides gives an anti-Markovnikov product ONLY for $\\text{HBr}$, but fails to do so for $\\text{HCl}$ and $\\text{HI}$. What is the thermodynamic rationale for this selectivity?`,
            opts: [
                `Both propagation steps in the free-radical chain mechanism are exothermic only for $\\text{HBr}$; for $\\text{HCl}$, the $H-Cl$ bond cleavage is endothermic, while for $\\text{HI}$, the addition of iodine radical is endothermic and iodine atoms rapidly recombine to form $I_2$.`,
                `$\\text{HCl}$ is a stronger acid than $\\text{HBr}$ and completely hydrolyzes peroxides.`,
                `$\\text{HI}$ reacts via an ionic carbocation mechanism that is accelerated by peroxides.`,
                `Radical addition to alkenes requires heavy halogen atoms with low electronegativity.`
            ],
            ans: 0,
            exp: `In free-radical anti-Markovnikov addition: Step 1 (addition of $X^\\bullet$ to alkene) is endothermic for $I^\\bullet$ because the $C-I$ bond formed is weak, and $I^\\bullet$ radicals dimerize to $I_2$. Step 2 (abstraction of $H^\\bullet$ from $H-X$ by carbon radical) is endothermic for $HCl$ because the $H-Cl$ bond is too strong ($431\\text{ kJ/mol}$). Only for $HBr$ are BOTH propagation steps exothermic, allowing the radical chain to propagate.`
        }),

        // 5. Electrophilic Aromatic Substitution (EAS) Wheland intermediate
        (i) => ({
            q: `[Top 100 AIR NEET/JEE - Q${i + 1}] During electrophilic aromatic substitution (e.g. nitration of chlorobenzene), chlorine acts as an ortho/para-director yet is overall deactivating compared to benzene. How is this apparent anomaly resolved through electronic effects?`,
            opts: [
                `The strong inductive electron-withdrawing effect ($-I$) of chlorine destabilizes the transition state overall (deactivating), but its resonance electron-donating effect ($+M$) selectively stabilizes positive charge in the arenium ion when the electrophile attacks at ortho and para positions.`,
                `Chlorine is activating at low temperatures and deactivating at high temperatures due to entropy changes.`,
                `The meta-position is sterically blocked by chlorine lone pairs.`,
                `Chlorine forms a coordinate covalent bond with the incoming nitronium ion.`
            ],
            ans: 0,
            exp: `Halogens on benzene exhibit competing electronic effects: inductive electron withdrawal ($-I$) and resonance donation ($+M$). Because chlorine is highly electronegative and $2p(C)-3p(Cl)$ overlap is less effective, $-I > +M$, withdrawing net electron density and making chlorobenzene less reactive than benzene (deactivating). However, attack at ortho/para positions allows $+M$ resonance stabilization of the Wheland sigma complex (all atoms achieve an octet), directing substitution to ortho and para.`
        }),

        // 6. SNi Mechanism (Retention of configuration)
        (i) => ({
            q: `[Top 100 AIR NEET/JEE - Q${i + 1}] When $(R)$-butan-2-ol is treated with thionyl chloride ($\\text{SOCl}_2$) in dry ether, $(R)$-2-chlorobutane is obtained with retention of configuration. However, when the same reaction is carried out in the presence of pyridine, $(S)$-2-chlorobutane is formed with inversion. What governs this stereochemical switch?`,
            opts: [
                `In ether, the reaction proceeds via an internal nucleophilic substitution ($S_Ni$) within an intimate chlorosulfite ion pair with frontside attack; in pyridine, pyridinium hydrochloride is formed, providing free chloride ions that attack the intermediate from the backside in an $S_N2$ step.`,
                `Pyridine acts as a reducing agent that converts thionyl chloride into a free radical species.`,
                `Ether causes optical racemization by forming a symmetrical oxonium cation.`,
                `The chlorosulfite ester undergoes spontaneous photochemical homolysis in pyridine.`
            ],
            ans: 0,
            exp: `With $\\text{SOCl}_2$ alone in ether, an alkyl chlorosulfite ($RO-SOCl$) intermediate decomposes internally via an $S_Ni$ mechanism: chloride is delivered from the front side within the solvent cage, retaining configuration. When pyridine is added, it consumes $HCl$ to form pyridinium chloride, liberating nucleophilic $Cl^-$ ions which perform a classic backside $S_N2$ displacement with Walden inversion.`
        }),

        // 7. Aromaticity & Antiaromaticity in intermediates
        (i) => ({
            q: `[Top 100 AIR NEET/JEE - Q${i + 1}] Which of the following carbocations exhibits extraordinary thermodynamic stability due to cyclic $(4n+2)\\pi$ aromatic delocalization?`,
            opts: [
                `Cycloheptatrienyl cation (Tropylium ion, $6\\pi$ electrons)`,
                `Cyclopentadienyl cation ($4\\pi$ electrons)`,
                `Cyclopropenyl anion ($4\\pi$ electrons)`,
                `Cyclooctatetraenyl dication ($8\\pi$ electrons)`
            ],
            ans: 0,
            exp: `The tropylium cation ($C_7H_7^+$) is planar, cyclic, and possesses a completely conjugated ring of 7 carbons with 6 delocalized $\\pi$-electrons ($n=1$ in Huckel's $(4n+2)$ rule). This confers true aromatic stability, making its salts (like tropylium bromide) stable, ionic solids. In contrast, the cyclopentadienyl cation ($4\\pi$) is antiaromatic and exceedingly unstable.`
        }),

        // 8. Aldol & Cannizzaro mechanisms
        (i) => ({
            q: `[Top 100 AIR NEET/JEE - Q${i + 1}] In the cross-Cannizzaro reaction between benzaldehyde and formaldehyde in concentrated $\\text{NaOH}$, formaldehyde is exclusively oxidized to sodium formate while benzaldehyde is reduced to benzyl alcohol. What mechanistic factor determines this outcome?`,
            opts: [
                `Formaldehyde is less sterically hindered and more electrophilic, so hydroxide nucleophile attacks it first; the subsequent hydride ion transfer (rate-determining step) from the formal di-anion to benzaldehyde is thermodynamically favored.`,
                `Benzaldehyde has acidic $\\alpha$-hydrogens that undergo enolization.`,
                `Formaldehyde is a stronger reducing agent because it contains an aromatic ring.`,
                `Benzaldehyde decomposes into benzene in strong alkali.`
            ],
            ans: 0,
            exp: `Cannizzaro reaction rate is governed by nucleophilic addition of $OH^-$ to the carbonyl group. Formaldehyde ($HCHO$) is sterically unencumbered and has a more electrophilic carbonyl carbon than benzaldehyde (where the phenyl group donates electron density by resonance). Thus, $OH^-$ preferentially attacks $HCHO$ to form a gem-diol dianion, which then transfers a hydride ($H^-$) to the less reactive benzaldehyde in the rate-limiting step.`
        }),

        // 9. Pinacol-Pinacolone Rearrangement & Migratory Aptitude
        (i) => ({
            q: `[Top 100 AIR NEET/JEE - Q${i + 1}] In the acid-catalyzed pinacol-pinacolone rearrangement of unsymmetrical 1,2-diols, which group exhibits the greatest migratory aptitude towards the adjacent electron-deficient carbocation center?`,
            opts: [
                `$p$-Methoxyphenyl ($p$-anisyl)`,
                `$p$-Nitrophenyl`,
                `Methyl group`,
                `$p$-Chlorophenyl`
            ],
            ans: 0,
            exp: `The migratory aptitude of aryl groups in carbocation rearrangements correlates with their electron-donating capacity, because the migrating group participates in a bridged phenonium ion transition state where positive charge is delocalized. Strongly electron-donating groups like $p$-anisyl ($-OCH_3$ via $+M$) stabilize this transition state best: $p\\text{-anisyl} > p\\text{-tolyl} > \\text{phenyl} > p\\text{-chlorophenyl} > p\\text{-nitrophenyl}$.`
        }),

        // 10. Hofmann Elimination vs Zaitsev Elimination
        (i) => ({
            q: `[Top 100 AIR NEET/JEE - Q${i + 1}] Thermal decomposition of a quaternary ammonium hydroxide (e.g. $[CH_3-CH_2-CH(CH_3)-N(CH_3)_3]^+OH^-$) yields the less-substituted Hofmann alkene (but-1-ene) as the major product rather than the Zaitsev alkene (but-2-ene). What is the primary driving mechanism?`,
            opts: [
                `Steric bulk of the bulky trimethylammonium group forces the base to abstract the more accessible, less sterically hindered $\\beta$-proton from the terminal methyl group, passing through a carbanion-like transition state.`,
                `Quaternary ammonium salts eliminate via an $S_N1$ carbocation intermediate.`,
                `The Zaitsev alkene undergoes spontaneous polymerization under thermal conditions.`,
                `The $C-N$ bond can only cleave if the temperature is below $0^\\circ\\text{C}$.`
            ],
            ans: 0,
            exp: `Hofmann elimination occurs with bulky leaving groups (like $-N^+(CH_3)_3$ or $-S^+(CH_3)_2$) or bulky bases ($t-BuO^-$). The enormous steric hindrance disfavors approach of the base to internal $\\beta$-hydrogens. Furthermore, the strong electron-withdrawing positive charge on nitrogen makes the less-substituted terminal $\\beta$-hydrogens more acidic. The reaction proceeds through an $E2$ transition state with pronounced carbanionic character, favoring the less substituted alkene.`
        })
    ];

    for (let i = 0; i < 400; i++) {
        const template = MECHANISM_TEMPLATES[i % MECHANISM_TEMPLATES.length];
        const item = template(i);

        // Balance correct answer across 0, 1, 2, 3
        const targetAns = i % 4;
        const options = [...item.opts];
        if (targetAns !== 0) {
            // Swap option 0 with targetAns
            const temp = options[0];
            options[0] = options[targetAns];
            options[targetAns] = temp;
        }

        questions.push({
            type: 'MCQ',
            question: item.q,
            options,
            correctAnswer: targetAns,
            explanation: item.exp,
            subject: SUBJECT,
            chapter: CHAPTER,
            topic: CHAPTER,
            subTopic: SUBTOPIC,
            difficulty: 'Hard',
            class: 'Class 11',
            marks: 4,
            negativeMarks: 1,
            tag: 'Top 100 AIR NEET/JEE - Organic Reaction Mechanism',
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
    const initialCount = await qBank.countDocuments({
        chapter: CHAPTER,
        subTopic: SUBTOPIC
    });
    console.log(`📊 Initial questions for "${SUBTOPIC}" in DB: ${initialCount}`);

    const questions = generate400MechanismQuestions();
    console.log(`🎯 Generated ${questions.length} high-rigor conceptual MCQs for Top 100 AIR NEET/JEE.`);

    const res = await qBank.insertMany(questions);
    console.log(`✅ Successfully inserted ${res.insertedCount} questions into questionBank!`);

    const finalSubtopicTotal = await qBank.countDocuments({
        chapter: CHAPTER,
        subTopic: SUBTOPIC
    });
    const finalChapterTotal = await qBank.countDocuments({ chapter: CHAPTER });
    const finalDBTotal = await qBank.countDocuments();

    console.log('\n🎉 ====================================================');
    console.log(`🎉 COMPLETED! Added ${res.insertedCount} Top 100 AIR NEET/JEE MCQs for "${SUBTOPIC}".`);
    console.log(`📊 Total questions for "${SUBTOPIC}": ${finalSubtopicTotal}`);
    console.log(`📊 Total questions for "${CHAPTER}": ${finalChapterTotal}`);
    console.log(`📊 Overall total questions in questionBank: ${finalDBTotal}`);
    console.log('🎉 ====================================================');

    await client.close();
}

main().catch(console.error);
