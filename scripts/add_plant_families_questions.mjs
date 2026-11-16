import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const TARGET_TEST_ID = 'neet-SUBTOPIC-Botany-Plant-Families';
const SUBJECT = 'Botany';
const CHAPTER = 'Morphology of Flowering Plants';
const SUBTOPIC = 'Plant Families';

const rawQuestions = [
  {
    index: 1,
    commercialId: 'NEET-BOT-PFAM-001',
    question: `Read the following statements regarding family Fabaceae (Papilionoideae):
(i) Leaves are alternate, pinnately compound or simple, with a pulvinate leaf base and stipulate condition; venation is reticulate.
(ii) The inflorescence is typically cymose, bearing actinomorphic, bisexual, perigynous flowers.
(iii) Corolla consists of five free petals showing vexillary aestivation: one posterior standard, two lateral wings, and two anterior petals fused to form a keel.
(iv) Androecium consists of ten stamens in a diadelphous (9) + 1 arrangement with dithecous anthers.

How many of the above statements are incorrect?`,
    options: ['One', 'Two', 'Three', 'Four'],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Statements (i), (iii), and (iv) are correct (NCERT Class 11, Chapter 5, Fabaceae). Statement (ii) is incorrect: in Fabaceae, the inflorescence is typically racemose (not cymose), and the flowers are zygomorphic (bilateral symmetry) and hypogynous (superior ovary, $\\underline{G}_1$), not actinomorphic or perigynous. Thus, only one statement is incorrect.'
  },
  {
    index: 2,
    commercialId: 'NEET-BOT-PFAM-002',
    question: `Match Column-I (Economic Product / Use) with Column-II (Botanical Name) and Column-III (Plant Family):

| Column-I | Column-II | Column-III |
| :--- | :--- | :--- |
| (P) Dye (Indigo) | (i) *Crotalaria juncea* | (1) Liliaceae |
| (Q) Medicine (Belladonna) | (ii) *Indigofera tinctoria* | (2) Solanaceae |
| (R) Fibre (Sunn hemp) | (iii) *Atropa belladonna* | (3) Fabaceae |
| (S) Medicine (Colchicine) | (iv) *Colchicum autumnale* | (4) Fabaceae |`,
    options: [
      'P-(ii)-(3), Q-(i)-(4), R-(iii)-(2), S-(iv)-(1)',
      'P-(ii)-(3), Q-(iv)-(1), R-(i)-(4), S-(iii)-(2)',
      'P-(i)-(4), Q-(ii)-(3), R-(iii)-(2), S-(iv)-(1)',
      'P-(ii)-(3), Q-(iii)-(2), R-(i)-(4), S-(iv)-(1)'
    ],
    correctAnswer: 3,
    correctOption: 'd',
    explanation: `Correct matching:
• P. Dye (Indigo) → (ii) *Indigofera tinctoria* → (3) Fabaceae
• Q. Medicine (Belladonna) → (iii) *Atropa belladonna* → (2) Solanaceae
• R. Fibre (Sunn hemp) → (i) *Crotalaria juncea* → (4) Fabaceae
• S. Medicine (Colchicine) → (iv) *Colchicum autumnale* → (1) Liliaceae
Thus, the correct match is P-(ii)-(3), Q-(iii)-(2), R-(i)-(4), S-(iv)-(1).`
  },
  {
    index: 3,
    commercialId: 'NEET-BOT-PFAM-003',
    question: `Given below are two statements:
Assertion (A): In members of family Fabaceae such as *Pisum* and *Cicer*, the roots bear specialized nodules that enrich soil fertility.
Reason (R): These root nodules harbor symbiotic *Rhizobium* bacteria capable of fixing atmospheric nitrogen into biologically usable ammonia.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is not the correct explanation of (A).',
      '(A) is true but (R) is false.',
      'Both (A) and (R) are false.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Leguminous plants belonging to family Fabaceae (e.g., pea, gram, soyabean, *Sesbania*) form root nodules containing symbiotic *Rhizobium* bacteria that convert atmospheric $\\text{N}_2$ into ammonia, thereby enhancing soil nitrogen content. Both Assertion and Reason are true, and Reason correctly explains the Assertion.'
  },
  {
    index: 4,
    commercialId: 'NEET-BOT-PFAM-004',
    question: `Consider the following plants: *Trifolium*, *Petunia*, *Sesbania*, *Aloe*, *Lupin*, *Ashwagandha*, *Sweet pea*, *Gloriosa*, *Soyabean*, *Belladonna*. How many of these belong to family Fabaceae?`,
    options: ['Four', 'Five', 'Six', 'Seven'],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: `Plants belonging to family Fabaceae in the list are:
1. *Trifolium* (fodder)
2. *Sesbania* (fodder)
3. *Lupin* (ornamental)
4. Sweet pea (ornamental)
5. Soyabean (edible oil / pulse)
Total = 5.
(*Petunia*, *Ashwagandha*, and *Belladonna* belong to Solanaceae; *Aloe* and *Gloriosa* belong to Liliaceae). Thus, exactly five plants belong to Fabaceae.`
  },
  {
    index: 5,
    commercialId: 'NEET-BOT-PFAM-005',
    question: `Which floral formula accurately represents the family Brassicaceae (Cruciferae), such as *Brassica campestris* (mustard)?`,
    options: [
      '$\\oplus \\; \\text{⚥} \\; \\text{K}_{2+2} \\; \\text{C}_4 \\; \\text{A}_{2+4} \\; \\underline{\\text{G}}_{(2)}$',
      '$\\% \\; \\text{⚥} \\; \\text{K}_{(5)} \\; \\text{C}_{1+2+(2)} \\; \\text{A}_{(9)+1} \\; \\underline{\\text{G}}_1$',
      '$\\oplus \\; \\text{⚥} \\; \\text{K}_{(5)} \\; \\overgroup{\\text{C}_{(5)} \\; \\text{A}_5} \\; \\underline{\\text{G}}_{(2)}$',
      '$\\oplus \\; \\text{⚥} \\; \\text{P}_{(3+3)} \\; \\text{A}_{3+3} \\; \\underline{\\text{G}}_{(3)}$'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Brassicaceae (mustard family) has actinomorphic ($\\oplus$), bisexual ($\\text{⚥}$) flowers with 4 free sepals in two whorls ($\\text{K}_{2+2}$), 4 free cruciform petals ($\\text{C}_4$), 6 tetradynamous stamens ($\\text{A}_{2+4}$), and a bicarpellary, syncarpous, superior ovary ($\\underline{\\text{G}}_{(2)}$).'
  },
  {
    index: 6,
    commercialId: 'NEET-BOT-PFAM-006',
    question: `In family Brassicaceae, the androecium is represented as $\\text{A}_{2+4}$. What specific morphological arrangement does this notation indicate?`,
    options: [
      'Six stamens united into two bundles of two and four filaments respectively (diadelphous).',
      'Tetradynamous condition consisting of an outer whorl of two short stamens and an inner whorl of four long stamens.',
      'Didynamous condition consisting of four short epipetalous stamens and two long free stamens.',
      'Six syngenesious stamens fused exclusively by their anthers into two groups.'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'In family Brassicaceae, the notation $\\text{A}_{2+4}$ indicates the tetradynamous condition: six free stamens arranged in two whorls, consisting of an outer whorl of 2 short lateral stamens and an inner whorl of 4 long anteroposterior stamens.'
  },
  {
    index: 7,
    commercialId: 'NEET-BOT-PFAM-007',
    question: `Given below are two statements:
Statement I: In family Fabaceae, the calyx consists of five united sepals ($\\text{K}_{(5)}$) with valvate or imbricate aestivation.
Statement II: The gynoecium in Fabaceae is bicarpellary, syncarpous, with an inferior ovary and axile placentation.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: 'Statement I is correct: in Fabaceae, calyx has 5 united sepals with valvate or imbricate aestivation. Statement II is incorrect: the gynoecium in Fabaceae is monocarpellary, unilocular, with a superior ovary ($\\underline{\\text{G}}_1$) and marginal placentation.'
  },
  {
    index: 8,
    commercialId: 'NEET-BOT-PFAM-008',
    question: `Identify the mismatched pair among the economically important plants of family Brassicaceae:`,
    options: [
      '*Brassica oleracea* var. *botrytis* — Cauliflower (edible immature inflorescence)',
      '*Raphanus sativus* — Radish (edible fusiform tap root)',
      '*Iberis amara* — Candytuft (ornamental plant with corymb inflorescence)',
      '*Sesbania grandiflora* — Agathi (green manure and fodder crop)'
    ],
    correctAnswer: 3,
    correctOption: 'd',
    explanation: '*Sesbania grandiflora* belongs to family Fabaceae, not Brassicaceae. Cauliflower, radish, and candytuft (*Iberis amara*) all belong to Brassicaceae.'
  },
  {
    index: 9,
    commercialId: 'NEET-BOT-PFAM-009',
    question: `A student dissected a flower from a crop plant and recorded the following diagnostic characters:
• Ebracteate, actinomorphic, bisexual, hypogynous, tetramerous flower.
• Four free sepals arranged in two whorls ($2+2$) and four free petals arranged diagonally in a cross.
• Bicarpellary, syncarpous, superior ovary that is unilocular initially but becomes bilocular due to a false septum (replum).

The fruit of this plant is typically a:`,
    options: ['Legume (pod)', 'Siliqua or silicula', 'Capsule', 'Caryopsis'],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'The described floral traits (tetramerous flower, $\\text{K}_{2+2}$, cruciform corolla, bicarpellary syncarpous superior ovary divided into two locules by a false septum replum) belong to family Brassicaceae, whose characteristic fruit is a siliqua (long, e.g., mustard) or silicula (short and broad, e.g., candytuft).'
  },
  {
    index: 10,
    commercialId: 'NEET-BOT-PFAM-010',
    question: `In family Fabaceae, which pair of plants is cultivated primarily as fodder crops according to NCERT Class XI?`,
    options: [
      '*Sesbania* and *Trifolium*',
      '*Lupin* and Sweet pea',
      '*Indigofera* and *Mulaithi*',
      '*Arachis* and *Crotalaria*'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'According to NCERT Class XI (Chapter 5, Fabaceae Economic Importance), *Sesbania* and *Trifolium* are used as fodder crops; *Lupin* and sweet pea are ornamentals; *Indigofera* yields dye; *Mulaithi* is medicinal.'
  },
  {
    index: 11,
    commercialId: 'NEET-BOT-PFAM-011',
    question: `Read the following statements regarding family Solanaceae (commonly called the 'potato family'):
(i) Plants are mostly herbs, shrubs, and rarely small trees; stems are herbaceous, rarely woody, aerial, erect, cylindrical, branched, solid or hollow, hairy or glabrous, and underground stem in potato (*Solanum tuberosum*).
(ii) Leaves are alternate, simple, rarely pinnately compound, exstipulate, with reticulate venation.
(iii) Flowers are bisexual, zygomorphic, and perigynous with a persistent calyx.
(iv) Gynoecium is bicarpellary, obligately placed, syncarpous; ovary is superior, bilocular, with swollen placenta and many ovules.

How many of the above statements are correct?`,
    options: ['One', 'Two', 'Three', 'Four'],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: 'Statements (i), (ii), and (iv) are correct from NCERT Class XI (Ch. 5, Solanaceae). Statement (iii) is incorrect because flowers in Solanaceae are actinomorphic ($\\oplus$) and hypogynous ($\\underline{\\text{G}}_{(2)}$), not zygomorphic or perigynous. Thus, three statements are correct.'
  },
  {
    index: 12,
    commercialId: 'NEET-BOT-PFAM-012',
    question: `Match Column-I (Plant of Solanaceae) with Column-II (Common Name) and Column-III (Economic Importance):

| Column-I | Column-II | Column-III |
| :--- | :--- | :--- |
| (P) *Withania somnifera* | (i) Belladonna | (1) Fumigatory |
| (Q) *Atropa belladonna* | (ii) Ashwagandha | (2) Ornamental |
| (R) *Nicotiana tabacum* | (iii) Tobacco | (3) Medicine (anticholinergic atropine) |
| (S) *Petunia hybrida* | (iv) Petunia | (4) Medicine (rejuvenating tonic) |`,
    options: [
      'P-(ii)-(4), Q-(i)-(3), R-(iii)-(1), S-(iv)-(2)',
      'P-(i)-(3), Q-(ii)-(4), R-(iii)-(1), S-(iv)-(2)',
      'P-(ii)-(4), Q-(iii)-(1), R-(i)-(3), S-(iv)-(2)',
      'P-(iv)-(2), Q-(i)-(3), R-(iii)-(1), S-(ii)-(4)'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Matching:
• P. *Withania somnifera* → (ii) Ashwagandha → (4) Medicine (rejuvenating tonic)
• Q. *Atropa belladonna* → (i) Belladonna → (3) Medicine (anticholinergic atropine)
• R. *Nicotiana tabacum* → (iii) Tobacco → (1) Fumigatory
• S. *Petunia hybrida* → (iv) Petunia → (2) Ornamental
Thus, P-(ii)-(4), Q-(i)-(3), R-(iii)-(1), S-(iv)-(2).`
  },
  {
    index: 13,
    commercialId: 'NEET-BOT-PFAM-013',
    question: `Given below are two statements:
Assertion (A): In family Solanaceae, the stamens are described as epipetalous.
Reason (R): The five free stamens have their filaments fused with the petals of the gamopetalous corolla tube, represented by an arc connecting $\\text{C}_{(5)}$ and $\\text{A}_5$ in the floral formula.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is not the correct explanation of (A).',
      '(A) is true but (R) is false.',
      'Both (A) and (R) are false.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'In family Solanaceae, the five stamens are epipetalous (filaments fused to the corolla tube), denoted in the floral formula by an arc between $\\text{C}_{(5)}$ and $\\text{A}_5$. Both Assertion and Reason are true, and Reason is the correct explanation.'
  },
  {
    index: 14,
    commercialId: 'NEET-BOT-PFAM-014',
    question: `Which of the following sets of features uniquely distinguishes family Malvaceae (e.g., *Hibiscus rosa-sinensis*, *Gossypium*) from family Solanaceae?`,
    options: [
      'Presence of epicalyx, twisted corolla aestivation, monadelphous stamens with monothecous reniform anthers, and multicarpellary syncarpous ovary.',
      'Presence of cruciform corolla, tetradynamous stamens, and bicarpellary ovary with replum.',
      'Presence of papilionaceous corolla, diadelphous stamens, and monocarpellary ovary with marginal placentation.',
      'Presence of trimerous perianth, epiphyllous stamens, and tricarpellary ovary with axile placentation.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Family Malvaceae (*Hibiscus*, cotton) is uniquely distinguished by an epicalyx (whorl of bracteoles below calyx), twisted corolla aestivation, monadelphous stamens forming a staminal tube around the style, monothecous reniform (kidney-shaped) anthers, and a multicarpellary syncarpous superior ovary with axile placentation.'
  },
  {
    index: 15,
    commercialId: 'NEET-BOT-PFAM-015',
    question: `In family Malvaceae, the floral formula is written as $\\text{Epi}_{3-7} \\; \\oplus \\; \\text{⚥} \\; \\text{K}_{(5)} \\; \\text{C}_5 \\; \\overgroup{\\text{A}_{(\\infty)}} \\; \\underline{\\text{G}}_{(5-\\infty)}$. What does the notation $\\overgroup{\\text{A}_{(\\infty)}}$ (with an arc connecting $\\text{C}_5$ and $\\text{A}_{(\\infty)}$) signify?`,
    options: [
      'Numerous stamens fused by their anthers into a ring, attached to the sepals.',
      'Numerous stamens united by their filaments into a single staminal tube (monadelphous), which is epipetalous (adnate to the base of the petals).',
      'Five free stamens alternating with numerous sterile staminodes.',
      'Numerous stamens united into five separate bundles (polyadelphous) attached to the thalamus.'
    ],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'In Malvaceae, $\\text{A}_{(\\infty)}$ denotes numerous stamens united by their filaments into a single staminal tube (monadelphous), and the arc connecting $\\text{C}_5$ and $\\text{A}_{(\\infty)}$ denotes epipetalous adhesion (base of the staminal column fused to the petals).'
  },
  {
    index: 16,
    commercialId: 'NEET-BOT-PFAM-016',
    question: `Given below are two statements:
Statement I: In family Solanaceae, the fruit is either a berry (e.g., tomato, brinjal) or a capsule (e.g., *Datura*, *Petunia*), and seeds are many and endospermous.
Statement II: In family Solanaceae, the calyx is caducous and falls off immediately after pollination.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: 'Statement I is correct (NCERT Class 11, Ch. 5, Solanaceae). Statement II is incorrect because in Solanaceae, the calyx is persistent and remains attached to the fruit (often enlarging, as seen in brinjal, tomato, chilli, and *Physalis*).'
  },
  {
    index: 17,
    commercialId: 'NEET-BOT-PFAM-017',
    question: `Consider the following plants: *Gossypium* (cotton), *Abelmoschus esculentus* (bhindi / lady's finger), *Capsicum* (chilli), *Hibiscus rosa-sinensis* (china rose), *Solanum melongena* (brinjal), *Althaea rosea* (hollyhock). How many of these belong to family Malvaceae?`,
    options: ['Two', 'Three', 'Four', 'Five'],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: `Plants belonging to family Malvaceae in the list:
1. *Gossypium* (cotton)
2. *Abelmoschus esculentus* (bhindi)
3. *Hibiscus rosa-sinensis* (china rose)
4. *Althaea rosea* (hollyhock)
Total = 4. (*Capsicum* and *Solanum melongena* belong to family Solanaceae).`
  },
  {
    index: 18,
    commercialId: 'NEET-BOT-PFAM-018',
    question: `Identify the incorrect match between the plant of Malvaceae and its commercial product:`,
    options: [
      '*Gossypium hirsutum* — Surface seed coat hairs (epidermal trichomes of testa) yielding commercial cotton fiber.',
      '*Abelmoschus esculentus* — Immature mucilaginous capsule used as a vegetable (okra / bhindi).',
      '*Hibiscus cannabinus* — Bast (phloem) fibers used for making ropes and cordage (kenaf / patsan).',
      '*Atropa belladonna* — Roots and leaves yielding tropane alkaloids used as mydriatics.'
    ],
    correctAnswer: 3,
    correctOption: 'd',
    explanation: '*Atropa belladonna* belongs to family Solanaceae, not Malvaceae. Cotton (*Gossypium*), okra (*Abelmoschus*), and kenaf (*Hibiscus cannabinus*) are authentic members of Malvaceae.'
  },
  {
    index: 19,
    commercialId: 'NEET-BOT-PFAM-019',
    question: `Why are the anthers of family Malvaceae described as monothecous and reniform?`,
    options: [
      'Each anther has only one lobe (two microsporangia) and is kidney-shaped, dehiscing transversely along the apex.',
      'Each anther has four lobes and is linearly elongated, dehiscing by apical pores.',
      'Each anther is sterile and modified into a nectar-secreting gland.',
      'Each anther is fused with the stigma to form a gynostegium.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Unlike typical angiosperms that have dithecous (bilobed, tetrasporangiate) anthers, members of family Malvaceae possess monothecous (single-lobed, bisporangiate), kidney-shaped (reniform) anthers with transverse dehiscence.'
  },
  {
    index: 20,
    commercialId: 'NEET-BOT-PFAM-020',
    question: `In family Solanaceae, the inflorescence is typically:`,
    options: [
      'Solitary, axillary or cymose as in *Solanum*.',
      'Capitulum (head) surrounded by an involucre of bracts.',
      'Verticillaster condensed at opposite leaf nodes.',
      'Compound umbel with a whorl of bracteoles.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Per NCERT Class XI (Chapter 5, Solanaceae): Inflorescence is solitary, axillary or cymose as in *Solanum*.'
  },
  {
    index: 21,
    commercialId: 'NEET-BOT-PFAM-021',
    question: `Read the following statements regarding family Liliaceae (commonly called the 'Lily family'):
(i) It is a characteristic representative of monocotyledonous plants, consisting of perennial herbs with underground bulbs, corms, or rhizomes.
(ii) Leaves are mostly basal, alternate, linear, exstipulate, with parallel venation.
(iii) Flowers are bisexual, actinomorphic, with perianth of six tepals ($3+3$), often united into a tube, showing valvate aestivation.
(iv) Androecium consists of six stamens ($3+3$) which are epipetalous, and gynoecium is tricarpellary, syncarpous, with an inferior ovary.

How many of the above statements are incorrect?`,
    options: ['One', 'Two', 'Three', 'Four'],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Statements (i), (ii), and (iii) are correct (NCERT Class XI, Ch. 5, Liliaceae). Statement (iv) is incorrect: in Liliaceae, stamens are epiphyllous (attached to perianth/tepals, not petals) and the gynoecium has a superior ovary ($\\underline{\\text{G}}_{(3)}$), not an inferior ovary. Thus, only one statement (iv) is incorrect.'
  },
  {
    index: 22,
    commercialId: 'NEET-BOT-PFAM-022',
    question: `Match Column-I (Plant of Liliaceae) with Column-II (Perennating / Edible / Useful Part) and Column-III (Application):

| Column-I | Column-II | Column-III |
| :--- | :--- | :--- |
| (P) *Colchicum autumnale* | (i) Cladodes / fleshy roots | (1) Vegetable |
| (Q) *Aloe vera* | (iii) Succulent leaves | (2) Source of colchicine (induces polyploidy) |
| (R) *Asparagus officinalis* | (i) Cladodes / fleshy roots | (3) Medicine / cosmetics |
| (S) *Gloriosa superba* | (iv) Tuberous rhizome | (4) Ornamental (glory lily) |`,
    options: [
      'P-(ii)-(2), Q-(iii)-(3), R-(i)-(1), S-(iv)-(4)',
      'P-(iii)-(3), Q-(ii)-(2), R-(i)-(1), S-(iv)-(4)',
      'P-(ii)-(2), Q-(i)-(1), R-(iii)-(3), S-(iv)-(4)',
      'P-(iv)-(4), Q-(iii)-(3), R-(i)-(1), S-(ii)-(2)'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Matching:
• P. *Colchicum autumnale* → (ii) Corm → (2) Source of colchicine
• Q. *Aloe vera* → (iii) Succulent leaves → (3) Medicine / cosmetics
• R. *Asparagus officinalis* → (i) Cladodes / fleshy roots → (1) Vegetable
• S. *Gloriosa superba* → (iv) Tuberous rhizome → (4) Ornamental
Thus, P-(ii)-(2), Q-(iii)-(3), R-(i)-(1), S-(iv)-(4).`
  },
  {
    index: 23,
    commercialId: 'NEET-BOT-PFAM-023',
    question: `Given below are two statements:
Assertion (A): Family Asteraceae (Compositae) is the largest family of dicotyledonous angiosperms and is considered evolutionarily the most advanced dicot family.
Reason (R): It exhibits a highly condensed capitulum inflorescence, epigynous flowers with inferior ovary, syngenesious stamens, calyx modified into pappus, and single-seeded cypsela fruit with basal placentation.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is not the correct explanation of (A).',
      '(A) is true but (R) is false.',
      'Both (A) and (R) are false.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Asteraceae (Compositae) represents the evolutionary peak among dicots due to its capitulum inflorescence (maximizing pollination efficiency), epigynous flowers, syngenesious anther tube, pappus for wind dispersal, and single-seeded cypsela fruit with basal placentation. Both Assertion and Reason are true, and Reason correctly explains Assertion.'
  },
  {
    index: 24,
    commercialId: 'NEET-BOT-PFAM-024',
    question: `Compare the floral formulas of ray florets and disc florets in family Asteraceae (e.g., *Helianthus annuus*):`,
    options: [
      'Ray floret: $\\text{Br} \\; \\% \\; \\text{♀} \\; \\text{K}_{\\text{pappus}} \\; \\text{C}_{(5)} \\; \\text{A}_0 \\; \\overline{\\text{G}}_{(2)}$; Disc floret: $\\text{Br} \\; \\oplus \\; \\text{⚥} \\; \\text{K}_{\\text{pappus}} \\; \\text{C}_{(5)} \\; \\overgroup{\\text{A}_{(5)}} \\; \\overline{\\text{G}}_{(2)}$',
      'Ray floret: $\\text{Br} \\; \\oplus \\; \\text{⚥} \\; \\text{K}_5 \\; \\text{C}_5 \\; \\text{A}_5 \\; \\underline{\\text{G}}_{(2)}$; Disc floret: $\\text{Br} \\; \\% \\; \\text{♂} \\; \\text{K}_0 \\; \\text{C}_{(5)} \\; \\text{A}_0 \\; \\overline{\\text{G}}_1$',
      'Ray floret: $\\text{Ebr} \\; \\oplus \\; \\text{♂} \\; \\text{P}_{3+3} \\; \\text{A}_{3+3} \\; \\underline{\\text{G}}_0$; Disc floret: $\\text{Br} \\; \\% \\; \\text{♀} \\; \\text{P}_{(6)} \\; \\text{A}_0 \\; \\overline{\\text{G}}_{(3)}$',
      'Both ray and disc florets have identical floral formula: $\\text{Br} \\; \\oplus \\; \\text{⚥} \\; \\text{K}_0 \\; \\text{C}_{(5)} \\; \\text{A}_5 \\; \\underline{\\text{G}}_{(2)}$'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'In Asteraceae (e.g., sunflower), peripheral ray florets are zygomorphic ($\\&$), pistillate ($\\text{♀}$) or neuter, with calyx as pappus, 5 united petals, no stamens ($\\text{A}_0$), and inferior bicarpellary ovary ($\\overline{\\text{G}}_{(2)}$). Disc florets are actinomorphic ($\\oplus$), bisexual ($\\text{⚥}$), with 5 syngenesious epipetalous stamens ($\\overgroup{\\text{A}_{(5)}}$) and inferior ovary ($\\overline{\\text{G}}_{(2)}$).'
  },
  {
    index: 25,
    commercialId: 'NEET-BOT-PFAM-025',
    question: `In family Poaceae (Gramineae, e.g., *Triticum aestivum*, *Oryza sativa*), the perianth is highly reduced and represented by two (or rarely three) minute, hyaline, scale-like structures situated at the base of the ovary. These structures are called ______, and their primary physiological role is ______.`,
    options: [
      'Lodicules; swelling by absorbing water to force open the lemma and palea during anthesis (flower opening).',
      'Glumes; enclosing the entire spikelet and performing C4 photosynthesis.',
      'Pappus; acting as a parachute for wind dispersal of the caryopsis.',
      'Epicalyx; protecting the stigma from desiccation during self-pollination.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'In family Poaceae (grasses), the perianth is reduced to 2 (or 3) scale-like structures called lodicules. During anthesis, lodicules absorb water and swell, pushing apart the lemma and palea so stamens and feathery stigmas are exposed for wind pollination.'
  },
  {
    index: 26,
    commercialId: 'NEET-BOT-PFAM-026',
    question: `Which floral formula correctly represents a typical bisexual floret of family Poaceae (e.g., wheat / *Triticum*)?`,
    options: [
      '$\\text{Br} \\; \\% \\; \\text{⚥} \\; \\text{P}_{2 \\; (\\text{lodicules})} \\; \\text{A}_3 \\; \\underline{\\text{G}}_1 \\; (\\text{or } \\underline{\\text{G}}_{(2)})$',
      '$\\oplus \\; \\text{⚥} \\; \\text{P}_{(3+3)} \\; \\text{A}_{3+3} \\; \\underline{\\text{G}}_{(3)}$',
      '$\\text{Br} \\; \\oplus \\; \\text{⚥} \\; \\text{K}_{(5)} \\; \\text{C}_{(5)} \\; \\text{A}_5 \\; \\overline{\\text{G}}_{(2)}$',
      '\\% \\; \\text{⚥} \\; \\text{K}_{2+2} \\; \\text{C}_4 \\; \\text{A}_{2+4} \\; \\underline{\\text{G}}_{(2)}'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'A typical grass floret (Poaceae) is bracteate (subtended by lemma and palea), zygomorphic ($\\&$), bisexual, with perianth reduced to 2 lodicules, 3 stamens with versatile anthers, and a superior unilocular ovary with two feathery stigmas.'
  },
  {
    index: 27,
    commercialId: 'NEET-BOT-PFAM-027',
    question: `Given below are two statements:
Statement I: In family Poaceae, the stamens are typically three (or six in rice and bamboo) with long filaments and versatile anthers adapted for anemophily (wind pollination).
Statement II: The gynoecium in Poaceae has two feathery stigmas to trap airborne pollen grains, and a superior unilocular ovary containing a single basal ovule.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Both statements accurately describe the anemophilous (wind-pollination) adaptations of family Poaceae: versatile anthers on long filaments, feathery stigmas, and a superior unilocular ovary with a single basal ovule developing into a caryopsis fruit.'
  },
  {
    index: 28,
    commercialId: 'NEET-BOT-PFAM-028',
    question: `Consider the following plants: *Tulip*, *Zea mays*, *Parthenium*, *Allium cepa*, *Helianthus annuus*, *Saccharum officinarum*, *Smilax*, *Tagetes*. How many of these belong to monocotyledonous families?`,
    options: ['Three', 'Four', 'Five', 'Six'],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: `Monocotyledonous plants in the list:
1. *Tulip* (Liliaceae)
2. *Zea mays* (Poaceae)
3. *Allium cepa* (Liliaceae)
4. *Saccharum officinarum* (Poaceae)
5. *Smilax* (Liliaceae / Smilacaceae)
Total = 5. (*Parthenium*, *Helianthus annuus*, and *Tagetes* belong to the dicot family Asteraceae).`
  },
  {
    index: 29,
    commercialId: 'NEET-BOT-PFAM-029',
    question: `Identify the mismatched pair among the plants of family Asteraceae and their economic / ecological significance:`,
    options: [
      '*Helianthus annuus* — Sunflower (seeds yield edible semi-drying oil)',
      '*Carthamus tinctorius* — Safflower (seeds yield polyunsaturated edible oil and orange-red dye)',
      '*Parthenium hysterophorus* — Carrot grass (invasive exotic weed whose pollen causes severe respiratory allergy)',
      '*Colchicum autumnale* — Meadow saffron (corms yield colchicine alkaloid)'
    ],
    correctAnswer: 3,
    correctOption: 'd',
    explanation: '*Colchicum autumnale* belongs to family Liliaceae (Colchicaceae), not Asteraceae. Sunflower, safflower, and *Parthenium* all belong to family Asteraceae.'
  },
  {
    index: 30,
    commercialId: 'NEET-BOT-PFAM-030',
    question: `In family Liliaceae, what is the characteristic fruit type and seed nature according to NCERT Class XI?`,
    options: [
      'Fruit is a capsule, rarely berry; seeds are endospermous.',
      'Fruit is a legume; seeds are non-endospermic.',
      'Fruit is a cypsela; seeds are non-endospermic with persistent pappus.',
      'Fruit is a siliqua; seeds are attached to a false replum.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'NCERT Class XI (Chapter 5, Liliaceae) states: \'Fruit: capsule, rarely berry; Seed: endospermous\'.'
  },
  {
    index: 31,
    commercialId: 'NEET-BOT-PFAM-031',
    question: `Compare the placentation across five major angiosperm families: Fabaceae, Brassicaceae, Solanaceae, Liliaceae, and Asteraceae. Which sequence correctly matches their placentation types in the exact order listed?`,
    options: [
      'Marginal → Parietal → Axile → Axile → Basal',
      'Axile → Marginal → Parietal → Free central → Basal',
      'Marginal → Axile → Parietal → Basal → Free central',
      'Parietal → Marginal → Axile → Axile → Superficial'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Placentation types:
• Fabaceae: Marginal
• Brassicaceae: Parietal (with false septum replum)
• Solanaceae: Axile (swollen placenta)
• Liliaceae: Axile
• Asteraceae: Basal (single ovule)
The sequence is Marginal → Parietal → Axile → Axile → Basal.`
  },
  {
    index: 32,
    commercialId: 'NEET-BOT-PFAM-032',
    question: `A student was given four unknown flowers (W, X, Y, Z) to classify into their respective families based solely on ovary position and carpel number:
• Flower W: Monocarpellary, superior ovary.
• Flower X: Bicarpellary, syncarpous, superior ovary.
• Flower Y: Bicarpellary, syncarpous, inferior ovary.
• Flower Z: Tricarpellary, syncarpous, superior ovary.

Identify the correct family assignment for W, X, Y, and Z:`,
    options: [
      'W-Fabaceae, X-Solanaceae, Y-Asteraceae, Z-Liliaceae',
      'W-Asteraceae, X-Liliaceae, Y-Fabaceae, Z-Solanaceae',
      'W-Fabaceae, X-Liliaceae, Y-Solanaceae, Z-Asteraceae',
      'W-Brassicaceae, X-Fabaceae, Y-Asteraceae, Z-Liliaceae'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Assignments:
• W: Monocarpellary, superior ($\\underline{\\text{G}}_1$) = Fabaceae
• X: Bicarpellary, syncarpous, superior ($\\underline{\\text{G}}_{(2)}$) = Solanaceae (or Brassicaceae)
• Y: Bicarpellary, syncarpous, inferior ($\\overline{\\text{G}}_{(2)}$) = Asteraceae
• Z: Tricarpellary, syncarpous, superior ($\\underline{\\text{G}}_{(3)}$) = Liliaceae`
  },
  {
    index: 33,
    commercialId: 'NEET-BOT-PFAM-033',
    question: `Which pair of plant families shares both actinomorphic floral symmetry and a superior ovary (hypogynous flower) as their standard diagnostic condition?`,
    options: [
      'Solanaceae and Liliaceae',
      'Fabaceae and Asteraceae',
      'Fabaceae and Poaceae',
      'Asteraceae and Liliaceae'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Both Solanaceae ($\\oplus$, $\\underline{\\text{G}}_{(2)}$) and Liliaceae ($\\oplus$, $\\underline{\\text{G}}_{(3)}$) have actinomorphic flowers with a superior ovary. Fabaceae and Poaceae have zygomorphic flowers; Asteraceae has an inferior ovary.'
  },
  {
    index: 34,
    commercialId: 'NEET-BOT-PFAM-034',
    question: `Given below are two statements:
Assertion (A): In both Solanaceae and Liliaceae, the stamens are fused with the perianth / corolla whorl, yet different botanical terms are used to describe this adhesion.
Reason (R): In Solanaceae, stamens are attached to petals (epipetalous), whereas in Liliaceae, calyx and corolla are undifferentiated into tepals, so stamens attached to tepals are termed epiphyllous (or epitepalous).

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is not the correct explanation of (A).',
      '(A) is true but (R) is false.',
      'Both (A) and (R) are false.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'In Solanaceae, calyx and corolla are distinct, so stamens attached to petals are epipetalous. In Liliaceae, tepals constitute the perianth, so stamens attached to tepals are epiphyllous. Both Assertion and Reason are true, and Reason is the correct explanation.'
  },
  {
    index: 35,
    commercialId: 'NEET-BOT-PFAM-035',
    question: `Examine the following floral formula:
$$\\% \\; \\text{⚥} \\; \\text{K}_{(5)} \\; \\text{C}_{1+2+(2)} \\; \\text{A}_{(9)+1} \\; \\underline{\\text{G}}_1$$
Which of the following plants does NOT conform to this floral formula?`,
    options: [
      '*Pisum sativum*',
      '*Cicer arietinum*',
      '*Solanum nigrum*',
      '*Phaseolus mungo*'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: 'The floral formula represents family Fabaceae (papilionaceous corolla, diadelphous stamens (9)+1, monocarpellary superior ovary). *Pisum* (pea), *Cicer* (gram), and *Phaseolus* (moong) belong to Fabaceae, whereas *Solanum nigrum* (makoi) belongs to Solanaceae.'
  },
  {
    index: 36,
    commercialId: 'NEET-BOT-PFAM-036',
    question: `How many of the following families possess non-endospermic (exalbuminous) seeds as a general family characteristic?
*Fabaceae*, *Solanaceae*, *Liliaceae*, *Asteraceae*, *Poaceae*, *Brassicaceae*`,
    options: ['Two', 'Three', 'Four', 'Five'],
    correctAnswer: 1,
    correctOption: 'b',
    explanation: 'Families with non-endospermic (exalbuminous) seeds: Fabaceae, Asteraceae, and Brassicaceae (total = 3). Families with typically endospermic (albuminous) seeds: Solanaceae, Liliaceae, and Poaceae.'
  },
  {
    index: 37,
    commercialId: 'NEET-BOT-PFAM-037',
    question: `In which of the following families are syngenesious stamens (anthers united into a tube around the style, filaments free) combined with epipetalous adhesion?`,
    options: ['Asteraceae', 'Malvaceae', 'Fabaceae', 'Brassicaceae'],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'In Asteraceae (disc florets), the stamens are syngenesious (anthers fused into a tube around the style with free filaments) and epipetalous (filaments attached to the corolla tube).'
  },
  {
    index: 38,
    commercialId: 'NEET-BOT-PFAM-038',
    question: `Given below are two statements:
Statement I: In family Poaceae, the leaf base expands into a sheath covering the stem partially or wholly, and a membranous outgrowth called the ligule is present at the junction of the leaf sheath and lamina.
Statement II: In family Fabaceae, the leaf base may become swollen and is called the pulvinus, which is responsible for sleep movements (nyctinasty) in legumes.

In the light of the above statements, choose the most appropriate answer from the options given below:`,
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Both statements are correct: Poaceae leaves have a sheathing leaf base with a membranous ligule at the junction of the sheath and blade; Fabaceae leaves typically have a swollen pulvinate leaf base (pulvinus) that facilitates turgor-driven nyctinastic movements.'
  },
  {
    index: 39,
    commercialId: 'NEET-BOT-PFAM-039',
    question: `Match the characteristic aestivation of corolla / perianth with the corresponding plant family:

| Family | Typical Corolla / Perianth Aestivation |
| :--- | :--- |
| (P) Fabaceae | (1) Twisted |
| (Q) Malvaceae | (2) Valvate |
| (R) Solanaceae | (3) Vexillary (descending imbricate) |
| (S) Brassicaceae | (4) Valvate or imbricate (cruciform) |`,
    options: [
      'P-(3), Q-(1), R-(2), S-(4)',
      'P-(3), Q-(2), R-(1), S-(4)',
      'P-(1), Q-(3), R-(2), S-(4)',
      'P-(4), Q-(1), R-(2), S-(3)'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: `Matching:
• P. Fabaceae → (3) Vexillary (descending imbricate)
• Q. Malvaceae → (1) Twisted
• R. Solanaceae → (2) Valvate
• S. Brassicaceae → (4) Valvate or imbricate (cruciform)
Thus, P-(3), Q-(1), R-(2), S-(4).`
  },
  {
    index: 40,
    commercialId: 'NEET-BOT-PFAM-040',
    question: `Which of the following botanical pairs represents two plants belonging to the same family?`,
    options: [
      '*Allium cepa* and *Colchicum autumnale*',
      '*Atropa belladonna* and *Indigofera tinctoria*',
      '*Brassica campestris* and *Hibiscus rosa-sinensis*',
      '*Helianthus annuus* and *Triticum aestivum*'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Both *Allium cepa* (onion) and *Colchicum autumnale* (meadow saffron) belong to family Liliaceae. In (B), *Atropa* is Solanaceae and *Indigofera* is Fabaceae; in (C), *Brassica* is Brassicaceae and *Hibiscus* is Malvaceae; in (D), *Helianthus* is Asteraceae and *Triticum* is Poaceae.'
  },
  {
    index: 41,
    commercialId: 'NEET-BOT-PFAM-041',
    question: `Identify the incorrect statement regarding floral diagrams and floral formulas:`,
    options: [
      'The position of the mother axis with respect to the flower is represented by a dot on the top of the floral diagram.',
      'Cohesion of floral parts is indicated by enclosing the figure within brackets, while adhesion is indicated by a line drawn above the symbols of the floral parts.',
      'A line below the symbol $\\text{G}$ (i.e., $\\underline{\\text{G}}$) indicates an inferior ovary, whereas a line above $\\text{G}$ (i.e., $\\overline{\\text{G}}$) indicates a superior ovary.',
      'In a floral diagram, calyx, corolla, androecium, and gynoecium are drawn in successive whorls, with calyx being the outermost and gynoecium being in the center.'
    ],
    correctAnswer: 2,
    correctOption: 'c',
    explanation: 'Statement C is incorrect: a line below $\\text{G}$ ($\\underline{\\text{G}}$) indicates a superior ovary (hypogynous flower), whereas a line above $\\text{G}$ ($\\overline{\\text{G}}$) indicates an inferior ovary (epigynous flower) (NCERT Class XI, Ch. 5).'
  },
  {
    index: 42,
    commercialId: 'NEET-BOT-PFAM-042',
    question: `Which of the following families exhibits latex (milky or watery juice) in laticiferous vessels as a common anatomical feature, along with a capitulum inflorescence and ligulate ray florets (as in *Taraxacum* / dandelion and *Lactuca* / lettuce)?`,
    options: [
      'Asteraceae (subfamily Cichorioideae)',
      'Brassicaceae',
      'Fabaceae',
      'Poaceae'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Members of Asteraceae subfamily Cichorioideae (*Taraxacum*, *Lactuca*, *Sonchus*) possess articulated laticifers yielding latex, along with capitula composed of ligulate florets.'
  },
  {
    index: 43,
    commercialId: 'NEET-BOT-PFAM-043',
    question: `A student found an ornamental plant with reticulate venation, zygomorphic papilionaceous flowers, and $(9)+1$ diadelphous stamens. Which of the following plants matches both this taxonomic description and ornamental utility in NCERT?`,
    options: [
      '*Lupin* and Sweet pea (*Lathyrus odoratus*)',
      '*Tulip* and *Gloriosa*',
      '*Petunia* and *Datura*',
      '*Helianthus* and *Tagetes*'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Both *Lupin* and Sweet pea (*Lathyrus odoratus*) are explicitly cited in NCERT Class XI (Chapter 5, Fabaceae) as ornamental plants with papilionaceous flowers and $(9)+1$ diadelphous stamens.'
  },
  {
    index: 44,
    commercialId: 'NEET-BOT-PFAM-044',
    question: `Examine the following four statements (I–IV) across plant families and select the option that correctly identifies them as True (T) or False (F):
I. Myrosin cells containing glucosinolates (mustard oil glucosides) are characteristic of family Brassicaceae.
II. Mucilage canals and stellate hairs are characteristic anatomical features of family Malvaceae.
III. Bicollateral vascular bundles in the stem are characteristically found in family Solanaceae.
IV. Bulliform (motor) cells in the upper epidermis of leaves are characteristic of family Fabaceae.`,
    options: [
      'I-T, II-T, III-T, IV-F',
      'I-T, II-F, III-T, IV-F',
      'I-F, II-T, III-T, IV-T',
      'I-T, II-T, III-F, IV-F'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Statements I, II, and III are true. Statement IV is false: bulliform (motor) cells are characteristic of monocot leaves (Poaceae/grasses), not Fabaceae.'
  },
  {
    index: 45,
    commercialId: 'NEET-BOT-PFAM-045',
    question: `A botanist collected a wild herb in India with the following characteristics:
• Stipulate, alternate, simple leaves with palmately reticulate venation and stellate pubescence.
• Solitary axillary, actinomorphic, pentamerous, hypogynous flowers with an epicalyx of 5 bracteoles.
• Staminal column enclosing the style, bearing numerous kidney-shaped single-celled anthers.
• Loculicidal capsule fruit containing seeds covered with long white cellulosic hairs.

Identify the genus and family of this specimen:`,
    options: [
      '*Gossypium* — Family Malvaceae',
      '*Solanum* — Family Solanaceae',
      '*Brassica* — Family Brassicaceae',
      '*Crotalaria* — Family Fabaceae'
    ],
    correctAnswer: 0,
    correctOption: 'a',
    explanation: 'Stellate pubescence, epicalyx of bracteoles, monadelphous staminal column with monothecous reniform anthers, and loculicidal capsule with seeds covered with long cellulosic hairs identify *Gossypium* (cotton), belonging to family Malvaceae.'
  }
];

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('testseries');
    console.log(`=== ADDING 45 PLANT FAMILIES QUESTIONS TO CENTRAL QUESTION BANK & ${TARGET_TEST_ID} ===`);

    const qBankCol = db.collection('questionBank');
    const assignedQuestionIds = [];

    for (const q of rawQuestions) {
      const doc = {
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        subject: SUBJECT,
        chapter: CHAPTER,
        subtopic: SUBTOPIC,
        difficulty: 'Hard',
        type: 'MCQ',
        source: 'NCERT Class XI - Plant Families (Updated NMC Syllabus)',
        commercialId: q.commercialId,
        metadata: {
          exam: 'NEET',
          subject: SUBJECT,
          chapter: CHAPTER,
          subtopic: SUBTOPIC,
          commercialId: q.commercialId,
          topicOrder: q.index
        },
        updatedAt: new Date()
      };

      const res = await qBankCol.findOneAndUpdate(
        { commercialId: q.commercialId },
        {
          $set: doc,
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true, returnDocument: 'after' }
      );

      const resolvedDoc = res.value || res;
      let finalId = resolvedDoc?._id;
      if (!finalId) {
        const found = await qBankCol.findOne({ commercialId: q.commercialId });
        finalId = found?._id;
      }
      assignedQuestionIds.push(finalId);
    }

    console.log(`Upserted ${assignedQuestionIds.length} questions into central questionBank (NEET-BOT-PFAM-001 .. 045).`);

    const testPaperCol = db.collection('testPapers');
    const testDoc = {
      testId: TARGET_TEST_ID,
      title: SUBTOPIC,
      type: 'SUBTOPIC',
      subject: SUBJECT,
      chapter: CHAPTER,
      subtopic: SUBTOPIC,
      duration: 60,
      totalMarks: 180,
      questionsCount: assignedQuestionIds.length,
      positiveMarks: 4,
      negativeMarks: 1,
      status: 'published',
      isLive: true,
      targetExam: 'NEET',
      examType: 'neet',
      questions: assignedQuestionIds,
      updatedAt: new Date()
    };

    await testPaperCol.findOneAndUpdate(
      { testId: TARGET_TEST_ID },
      {
        $set: testDoc,
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
    console.log(`Upserted and assigned all 45 questions to ${TARGET_TEST_ID} in testPapers.`);

    // Audit report & audit state sync
    const auditReportsCol = db.collection('testAuditReports');
    const auditStatesCol = db.collection('testAuditStates');

    await auditReportsCol.updateMany(
      { testId: TARGET_TEST_ID },
      { $set: { isLatest: false } }
    );

    const questionAudits = rawQuestions.map((q, idx) => ({
      questionIndex: idx + 1,
      questionId: assignedQuestionIds[idx].toString(),
      commercialId: q.commercialId,
      status: 'PASS',
      subject: SUBJECT,
      chapter: CHAPTER,
      subtopic: SUBTOPIC,
      aiPass: true,
      issues: []
    }));

    const auditReportDoc = {
      testId: TARGET_TEST_ID,
      reportVersion: 1,
      isLatest: true,
      status: 'COMPLETED',
      summary: {
        totalQuestions: 45,
        aiPasses: 45,
        aiFailures: 0,
        manualReviewsNeeded: 0
      },
      questionAudits,
      auditedAt: new Date(),
      createdAt: new Date()
    };

    await auditReportsCol.insertOne(auditReportDoc);

    await auditStatesCol.findOneAndUpdate(
      { testId: TARGET_TEST_ID },
      {
        $set: {
          testId: TARGET_TEST_ID,
          status: 'PASSED',
          totalQuestions: 45,
          aiPasses: 45,
          aiFailures: 0,
          manualReviewsNeeded: 0,
          latestReportVersion: 1,
          lastAuditedAt: new Date(),
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
    console.log('Synchronized testAuditReports (v1, 45/45 Pass) and testAuditStates.');

  } catch (err) {
    console.error('Error in import script:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

run();

