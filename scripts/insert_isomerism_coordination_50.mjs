import fs from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export const isomerismQuestions50 = [
    // Q1
    {
        question_id: 1,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "The total number of stereoisomers possible for the octahedral coordination entity $[\\text{Co}(\\text{en})(\\text{NH}_3)_2\\text{Cl}_2]^+$ is:",
        options: [
            "$2$",
            "$3$",
            "$4$",
            "$6$"
        ],
        correctAnswer: 2,
        correctOption: "c",
        explanation: "1. The complex [Co(en)(NH3)2Cl2]^+ has the general formulation [M(AA)b2c2], where (en) is a symmetrical bidentate chelating ligand that must occupy adjacent (cis) coordination sites.\n2. Three geometrical isomers are possible:\n   (i) trans-NH3, cis-Cl2: Has a vertical mirror plane (achiral, optically inactive).\n   (ii) trans-Cl2, cis-(NH3)2: Has a vertical mirror plane (achiral, optically inactive).\n   (iii) cis-NH3, cis-Cl2: Lacks any improper axis of rotation (Sn), center of inversion, or plane of symmetry; it is chiral and exists as a pair of non-superimposable enantiomers (d- and l-forms).\n3. Total stereoisomers = 2 achiral isomers + 2 enantiomeric forms = 4 stereoisomers (Total geometrical isomers = 3)."
    },
    // Q2
    {
        question_id: 2,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Which of the following square planar complexes cannot exhibit geometrical isomerism?",
        options: [
            "$[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$",
            "$[\\text{Pt}(\\text{gly})_2]$",
            "$[\\text{Pt}(\\text{NH}_3)(\\text{py})\\text{ClBr}]$",
            "$[\\text{Pt}(\\text{en})\\text{Cl}_2]$"
        ],
        correctAnswer: 3,
        correctOption: "d",
        explanation: "1. In square planar [Pt(en)Cl2], ethylenediamine (en) is a bidentate ligand with a bite angle of ~85-90°.\n2. Due to ring strain, it can only span adjacent (cis) coordination positions; it cannot span the 180° diagonal distance between trans positions.\n3. Consequently, both chloride ligands are forced to occupy mutually cis positions. No trans isomer can exist, so it cannot exhibit geometrical isomerism.\n4. In contrast, [Pt(NH3)2Cl2] shows cis/trans, [Pt(gly)2] shows cis/trans, and [Pt(NH3)(py)ClBr] has 3 geometrical isomers."
    },
    // Q3
    {
        question_id: 3,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "How many total isomers (structural and stereoisomers) are possible for the coordination compound $[\\text{Cr}(\\text{NH}_3)_4\\text{Cl}_2]\\text{NO}_2$?",
        options: [
            "$4$",
            "$6$",
            "$8$",
            "$10$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. The formula gives rise to two ionization isomers:\n   - Ionization Isomer I: [Cr(NH3)4Cl2]NO2 (with NO2^- as free counter-ion). The complex cation [Cr(NH3)4Cl2]^+ of type [Ma4b2] gives 2 geometrical isomers (cis and trans). Both are achiral (2 isomers).\n   - Ionization Isomer II: [Cr(NH3)4Cl(NO2)]Cl (with Cl^- as free counter-ion). Since NO2^- is ambidentate, it forms two linkage isomers:\n     * Linkage A: [Cr(NH3)4Cl(NO2)]Cl (nitro form) -> 2 geometrical isomers (cis and trans).\n     * Linkage B: [Cr(NH3)4Cl(ONO)]Cl (nitrito form) -> 2 geometrical isomers (cis and trans).\n2. Total isomers = 2 (from Isomer I) + 2 (from nitro Isomer II) + 2 (from nitrito Isomer II) = 6 isomers."
    },
    // Q4
    {
        question_id: 4,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "The total number of pairs of enantiomers possible for the complex $[\\text{Pt}(\\text{en})\\text{Cl}_2\\text{Br}_2]$ (octahedral) is:",
        options: [
            "$0$",
            "$1$",
            "$2$",
            "$3$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. [Pt(en)Cl2Br2] has the general formulation [M(AA)b2c2].\n2. It has three geometrical isomers:\n   - trans-Cl2, cis-Br2: Has an internal plane of symmetry (achiral).\n   - trans-Br2, cis-Cl2: Has an internal plane of symmetry (achiral).\n   - cis-Cl2, cis-Br2: Lacks any improper rotation axis or mirror plane; it is asymmetric/chiral.\n3. The chiral all-cis isomer exists as a pair of non-superimposable mirror image enantiomers (d and l forms).\n4. Hence, there is exactly 1 pair of enantiomers."
    },
    // Q5
    {
        question_id: 5,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Which of the following complex ions possesses an inversion center ($i$) in one of its stereoisomers?",
        options: [
            "$trans\\text{-}[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$",
            "$cis\\text{-}[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$",
            "$[\\text{Co}(\\text{en})_3]^{3+}$",
            "$fac\\text{-}[\\text{Rh}(\\text{py})_3\\text{Cl}_3]$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. In trans-[Co(en)2Cl2]^+, the two axial chloride ligands lie at 180° directly opposite each other across the central cobalt ion.\n2. The four nitrogen donor atoms of the two equatorial ethylenediamine chelate rings are positioned symmetrically such that every atom at coordinates (x, y, z) has an identical partner at (-x, -y, -z).\n3. Thus, trans-[Co(en)2Cl2]^+ possesses an inversion center (i), rendering it centrosymmetric, achiral, and optically inactive."
    },
    // Q6
    {
        question_id: 6,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "An octahedral complex $[\\text{Mabcdef}]$ having six distinct unidentate ligands can give rise to how many stereoisomers and how many pairs of enantiomers respectively?",
        options: [
            "$15$ and $0$",
            "$30$ and $15$",
            "$15$ and $15$",
            "$30$ and $30$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. In an octahedral complex [Mabcdef] with 6 different ligands, the number of geometrical isomers is found by placing ligand 'a' at one vertex and choosing its trans partner (5 choices: b, c, d, e, or f).\n2. For each choice of trans partner, the remaining 4 ligands in the equatorial plane can be arranged in (4 - 1)! / 2 = 3 planar configurations. Total geometrical isomers = 5 × 3 = 15 geometrical isomers.\n3. Because every single ligand is chemically unique, no isomer possesses any plane of symmetry (σ), center of inversion (i), or improper axis (Sn). All 15 geometrical isomers belong to the chiral C1 point group.\n4. Every geometrical isomer exists as a pair of non-superimposable enantiomers. Total stereoisomers = 15 × 2 = 30 stereoisomers (15 pairs of enantiomers)."
    },
    // Q7
    {
        question_id: 7,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "How many geometrical isomers are formed by the complex $[\\text{Pt}(\\text{gly})_2]$?",
        options: [
            "$1$",
            "$2$",
            "$3$",
            "$4$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. Glycinate (gly^- = NH2-CH2-COO^-) is an unsymmetrical bidentate ligand having two distinct donor atoms: nitrogen (N) and oxygen (O), denoted as (AB).\n2. [Pt(gly)2] is a tetracoordinate square planar complex of Pt(II): [M(AB)2].\n3. It forms 2 geometrical isomers:\n   - cis-isomer: The two nitrogen donor atoms are adjacent to each other (N-Pt-N angle ~ 90°), and the two oxygen donor atoms are adjacent.\n   - trans-isomer: The two nitrogen donor atoms are opposite each other (N-Pt-N angle = 180°), and the two oxygen donor atoms are opposite."
    },
    // Q8
    {
        question_id: 8,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "A transition metal complex has empirical formula $\\text{PtCl}_2 \\cdot 2\\text{NH}_3$. It reacts with $\\text{AgNO}_3$ to give no precipitate, but on measurement of dipole moment, it gives $\\mu = 0\\text{ D}$. The complex is:",
        options: [
            "$cis\\text{-}[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$",
            "$trans\\text{-}[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$",
            "$[\\text{Pt}(\\text{NH}_3)_4][\\text{PtCl}_4]$",
            "$[\\text{Pt}(\\text{NH}_3)_3\\text{Cl}]\\text{Cl}$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. Because the complex produces no precipitate with AgNO3, both chloride ions reside inside the coordination sphere, giving the formulation [Pt(NH3)2Cl2].\n2. Pt(II) forms square planar complexes.\n3. In trans-[Pt(NH3)2Cl2], the two Pt-Cl bond dipoles are directed at 180° in opposite directions and cancel out completely; similarly, the two Pt-NH3 dipoles cancel. The net resultant molecular dipole moment is μ = 0 D.\n4. In cis-[Pt(NH3)2Cl2], the bond dipoles are oriented at 90°, yielding a significant resultant dipole moment (μ ≈ 4.3 D)."
    },
    // Q9
    {
        question_id: 9,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "For the complex $[\\text{M}(\\text{AA})_2\\text{b}_2]$, where $\\text{AA}$ is a symmetrical bidentate ligand and $\\text{b}$ is a monodentate ligand:",
        options: [
            "Both $cis$ and $trans$ isomers are optically active",
            "Only the $cis$ isomer is chiral and optically active",
            "Only the $trans$ isomer is chiral and optically active",
            "Neither isomer exhibits optical activity"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. In [M(AA)2b2] (e.g., [Co(en)2Cl2]^+), two geometrical isomers exist: cis and trans.\n2. In the trans-isomer, the two monodentate ligands 'b' lie at 180° opposite each other, and the two chelate rings lie in the equatorial plane. It possesses an inversion center (i) and a horizontal mirror plane (σh), making it achiral and optically inactive.\n3. In the cis-isomer, the two 'b' ligands are at 90°. It belongs to the chiral point group C2 (possesses only a C2 rotational axis and lacks any plane or center of inversion). Hence, only the cis-isomer is chiral and optically active."
    },
    // Q10
    {
        question_id: 10,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "The compound $[\\text{Co}(\\text{NH}_3)_5\\text{SO}_4]\\text{Br}$ and $[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$ can be distinguished chemically by using:",
        options: [
            "$\\text{AgNO}_3\\text{(aq)}$ and $\\text{BaCl}_2\\text{(aq)}$",
            "$\\text{NaOH}\\text{(aq)}$ only",
            "Concentrated $\\text{HCl}$",
            "Litmus paper test"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. These two complexes are classic ionization isomers.\n2. [Co(NH3)5SO4]Br ionizes in aqueous solution to furnish free Br^- ions. Upon addition of aqueous AgNO3, it produces a pale yellow precipitate of AgBr (insoluble in dilute HNO3), but does not precipitate with BaCl2.\n3. [Co(NH3)5Br]SO4 ionizes to release free SO4^2- ions. Upon addition of aqueous BaCl2, it yields a white precipitate of BaSO4 (insoluble in concentrated HCl), but does not precipitate with AgNO3.\n4. Thus, AgNO3(aq) and BaCl2(aq) clearly distinguish between them."
    },
    // Q11
    {
        question_id: 11,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Total number of geometrical isomers for $[\\text{Ma}_2\\text{b}_2\\text{c}_2]$ is:",
        options: [
            "$4$",
            "$5$",
            "$6$",
            "$8$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. In an octahedral complex [Ma2b2c2], pairs of identical ligands can either be trans or cis to each other.\n2. Systematically specifying the trans pairs:\n   (1) a trans to a, b trans to b, c trans to c (all-trans: trans-a, trans-b, trans-c)\n   (2) a trans to a, b cis to b, c cis to c (trans-a only)\n   (3) b trans to b, a cis to a, c cis to c (trans-b only)\n   (4) c trans to c, a cis to a, b cis to b (trans-c only)\n   (5) a cis to a, b cis to b, c cis to c (all-cis: a trans to b, b trans to c, c trans to a)\n3. Total number of geometrical isomers = 5."
    },
    // Q12
    {
        question_id: 12,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "How many of the geometrical isomers of $[\\text{Ma}_2\\text{b}_2\\text{c}_2]$ are optically active (chiral)?",
        options: [
            "$1$",
            "$2$",
            "$3$",
            "$4$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. Out of the 5 geometrical isomers of [Ma2b2c2]:\n   - Isomer 1 (all-trans) has an inversion center (i) and three mirror planes (achiral).\n   - Isomers 2, 3, and 4 (each having one trans pair and two cis pairs) possess two vertical mirror planes (achiral).\n   - Isomer 5 (all-cis: cis-a2, cis-b2, cis-c2) belongs to the C2 chiral point group; it lacks any mirror plane (σ) or inversion center (i).\n2. Therefore, precisely 1 geometrical isomer is chiral and optically active (existing as a pair of d- and l-enantiomers)."
    },
    // Q13
    {
        question_id: 13,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "What is the total number of stereoisomers (including enantiomers) for $[\\text{Ma}_2\\text{b}_2\\text{c}_2]$?",
        options: [
            "$5$",
            "$6$",
            "$7$",
            "$8$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. [Ma2b2c2] produces 5 geometrical isomers.\n2. Four of these geometrical isomers are achiral (inactive) and each contributes 1 stereoisomer: 4 × 1 = 4.\n3. The one remaining geometrical isomer (all-cis) is chiral and exists as a pair of non-superimposable mirror images (enantiomers), contributing 2 stereoisomers: 1 × 2 = 2.\n4. Total number of stereoisomers = 4 + 2 = 6."
    },
    // Q14
    {
        question_id: 14,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Which of the following species exhibits hydrate (solvate) isomerism?",
        options: [
            "$\\text{CrCl}_3 \\cdot 6\\text{H}_2\\text{O}$",
            "$[\\text{Co}(\\text{en})_3]\\text{Cl}_3$",
            "$\\text{K}_4[\\text{Fe}(\\text{CN})_6]$",
            "$[\\text{Ni}(\\text{CO})_4]$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. Hydrate (solvate) isomerism occurs when water molecules function either directly as coordinated ligands inside the sphere or as crystal lattice water outside the sphere.\n2. CrCl3·6H2O is the classic example exhibiting hydrate isomerism, existing in three distinct forms:\n   - [Cr(H2O)6]Cl3 (violet; 3 Cl^- ionizable)\n   - [Cr(H2O)5Cl]Cl2·H2O (blue-green; 2 Cl^- ionizable)\n   - [Cr(H2O)4Cl2]Cl·2H2O (dark green; 1 Cl^- ionizable)."
    },
    // Q15
    {
        question_id: 15,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "How many coordinate linkages can the ligand nitrito form with a transition metal ion, and what type of isomerism does it primarily introduce?",
        options: [
            "$1$ (through $\\text{N}$ or $\\text{O}$); Linkage isomerism",
            "$2$ simultaneously; Coordination isomerism",
            "$3$ simultaneously; Ionization isomerism",
            "$1$ through $\\text{N}$ only; Geometrical isomerism"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. The nitrite ion (NO2^-) is an ambidentate monodentate ligand that can coordinate to a metal center through either its nitrogen atom (-NO2, nitro) or one of its oxygen atoms (-ONO, nitrito).\n2. Because it possesses two different donor atoms but donates only one electron pair to form 1 coordinate bond at a time, it introduces linkage isomerism."
    },
    // Q16
    {
        question_id: 16,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "The number of possible coordination isomers for the pair $[\\text{Cu}(\\text{NH}_3)_4][\\text{PtCl}_4]$ is:",
        options: [
            "$2$",
            "$3$",
            "$4$",
            "$5$"
        ],
        correctAnswer: 2,
        correctOption: "c",
        explanation: "1. Coordination isomerism arises from the interchange of ligands between the cationic and anionic coordination spheres.\n2. For the salt pair containing Cu(II) and Pt(II) (both with coordination number 4), the possible ionic pairs are:\n   (i) [Cu(NH3)4][PtCl4]\n   (ii) [Cu(NH3)3Cl][Pt(NH3)Cl3]\n   (iii) [Pt(NH3)3Cl][Cu(NH3)Cl3]\n   (iv) [Pt(NH3)4][CuCl4]\n3. Note: The neutral combination [Cu(NH3)2Cl2] and [Pt(NH3)2Cl2] cannot form an ionic compound because both species are neutral non-electrolytes.\n4. Therefore, exactly 4 coordination isomers exist."
    },
    // Q17
    {
        question_id: 17,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "The complex $[\\text{Co}(\\text{NH}_3)_3(\\text{NO}_2)_3]$ can exhibit:",
        options: [
            "Geometrical isomerism only",
            "Linkage isomerism only",
            "Both geometrical and linkage isomerism",
            "Optical isomerism only"
        ],
        correctAnswer: 2,
        correctOption: "c",
        explanation: "1. As an octahedral complex of type [Ma3b3], it exhibits geometrical isomerism, forming facial (fac) and meridional (mer) isomers.\n2. Furthermore, the nitrite ligand (NO2^-) is ambidentate and can bind via nitrogen (-NO2) or oxygen (-ONO), producing linkage isomerism with various combinations of nitro and nitrito ligands.\n3. Therefore, it exhibits both geometrical and linkage isomerism."
    },
    // Q18
    {
        question_id: 18,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "What is the plane of symmetry ($\\sigma$) present in $fac\\text{-}[\\text{Ma}_3\\text{b}_3]$?",
        options: [
            "It contains zero planes of symmetry",
            "It contains exactly $3$ vertical mirror planes",
            "It contains a center of inversion ($i$)",
            "It contains an $S_4$ improper rotation axis"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. The facial isomer fac-[Ma3b3] possesses C3v molecular symmetry.\n2. It has a principal C3 rotational axis passing symmetrically through the centers of the opposing triangular 'a3' and 'b3' faces.\n3. In addition, it contains exactly 3 vertical mirror planes (σv), each passing through the central metal atom and containing one 'a' ligand and one 'b' ligand while reflecting the other two pairs into each other."
    },
    // Q19
    {
        question_id: 19,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Which isomer of $[\\text{Ma}_3\\text{b}_3]$ has an axis of symmetry of highest order?",
        options: [
            "$fac$-isomer ($C_3$ axis)",
            "$mer$-isomer ($C_3$ axis)",
            "$mer$-isomer ($C_4$ axis)",
            "Both have only $C_1$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. fac-[Ma3b3] belongs to the C3v point group and possesses a 3-fold proper rotation axis (C3).\n2. mer-[Ma3b3] belongs to the C2v point group and possesses only a 2-fold proper rotation axis (C2).\n3. Because 3 > 2, the fac-isomer possesses the symmetry axis of highest order (C3)."
    },
    // Q20
    {
        question_id: 20,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Total number of stereoisomers for the tetrahedral complex $[\\text{M}(\\text{AB})_2]$ (where $\\text{AB}$ is an unsymmetrical bidentate ligand) is:",
        options: [
            "$1$",
            "$2$ (one pair of enantiomers)",
            "$3$",
            "$4$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. In tetrahedral geometry, a complex [M(AB)2] with unsymmetrical bidentate ligands (such as bis(benzoylacetonato)beryllium(II)) has its two chelate rings oriented in mutually perpendicular planes.\n2. Due to the asymmetry of the AB ligand (donor A ≠ donor B), the molecule lacks any plane of symmetry (σ) or improper rotation axis (Sn).\n3. It belongs to the chiral C2 point group and exists as a pair of non-superimposable mirror image enantiomers (2 stereoisomers)."
    },
    // Q21
    {
        question_id: 21,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Can a square planar complex of the type $[\\text{M(AB)}_2]$ show optical isomerism?",
        options: [
            "Yes, always",
            "No, because the molecular plane always acts as a plane of symmetry ($\\sigma_h$)",
            "Yes, if ligands have chiral carbon centers only",
            "Both (b) and (c) are true under respective conditions"
        ],
        correctAnswer: 3,
        correctOption: "d",
        explanation: "1. Square planar complexes with planar/achiral ligands have all coordinating atoms lying in a single plane. This molecular plane acts as a horizontal mirror plane of symmetry (σh), preventing optical activity.\n2. However, if the chelating ligands possess stereocenters (chiral carbon atoms) or sterically hindered substituted chelate rings that are twisted out of the coordination plane, the plane of symmetry is destroyed, and optical isomerism can be observed.\n3. Therefore, statement (d) correctly recognizes both the fundamental planar symmetry constraint and the chiral-ligand exception."
    },
    // Q22
    {
        question_id: 22,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "How many geometrical isomers are possible for the octahedral entity $[\\text{Ma}_3\\text{b}_2\\text{c}]$?",
        options: [
            "$2$",
            "$3$",
            "$4$",
            "$5$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. For [Ma3b2c], consider the relative orientation of the two 'b' ligands:\n   - Case 1: 'b' trans to 'b'. The remaining ligands (three 'a' and one 'c') occupy the equatorial plane. Two 'a' ligands must be trans to each other, and the third 'a' is trans to 'c'. (1 isomer: trans-b, trans-a, cis-ac).\n   - Case 2: 'b' cis to 'b'. Two 'a' ligands can be trans to each other, leaving the third 'a' trans to 'b' and 'c' trans to 'b'. (1 isomer: cis-b, trans-a).\n   - Case 3: 'b' cis to 'b', and 'a' trans to 'c'. Then the remaining two 'a' ligands are cis to each other and trans to the two 'b' ligands. (1 isomer: cis-b, trans-ac).\n2. Total geometrical isomers = 3."
    },
    // Q23
    {
        question_id: 23,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "The total number of stereoisomers for the complex $[\\text{Co}(\\text{ox})_2\\text{Cl}_2]^{3-}$ is:",
        options: [
            "$2$",
            "$3$",
            "$4$",
            "$1$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. [Co(ox)2Cl2]^3- is of the type [M(AA)2b2] where oxalate (ox^2-) is a symmetrical bidentate ligand.\n2. It forms 2 geometrical isomers: cis and trans.\n3. The trans-isomer has an inversion center (i) and mirror planes, making it achiral (1 stereoisomer).\n4. The cis-isomer has C2 symmetry, lacks any plane of symmetry, and exists as a pair of non-superimposable mirror image enantiomers (d- and l-forms, 2 stereoisomers).\n5. Total stereoisomers = 1 + 2 = 3."
    },
    // Q24
    {
        question_id: 24,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Which of the following statements regarding $[\\text{Co}(\\text{EDTA})]^-$ is correct?",
        options: [
            "It has a center of symmetry and is optically inactive",
            "It lacks any $S_n$ improper axis and exists as a pair of enantiomers",
            "It cannot form chelate rings",
            "It exhibits geometrical isomerism"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. EDTA^4- is a hexadentate ligand coordinating through 2 nitrogen and 4 carboxylate oxygen atoms to form 5 chelate rings around the cobalt(III) ion.\n2. The wrap of the hexadentate ligand imposes an asymmetric propeller-like helical conformation belonging to the chiral C2 point group.\n3. It lacks any plane of symmetry (σ), center of inversion (i), or improper rotation axis (Sn).\n4. Consequently, [Co(EDTA)]^- is optically active and exists as a pair of enantiomers."
    },
    // Q25
    {
        question_id: 25,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "An octahedral complex $[\\text{M(AB)}_3]$ containing three unsymmetrical bidentate ligands (such as glycinate) gives rise to how many total stereoisomers?",
        options: [
            "$2$",
            "$4$ (two pairs of enantiomers: $cis/fac$ and $trans/mer$)",
            "$6$",
            "$8$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. Octahedral [M(AB)3] (such as tris(glycinato)cobalt(III)) forms two geometrical isomers: facial (fac or cis) and meridional (mer or trans).\n2. In the fac-isomer, three identical donor atoms (e.g. three N's) occupy one triangular face of the octahedron (C3 symmetry). It lacks a plane of symmetry and is chiral, giving two enantiomers (Δ-fac and Λ-fac).\n3. In the mer-isomer, three identical donor atoms lie in a plane passing through the metal center (C1 symmetry). It also lacks a plane of symmetry and is chiral, giving two enantiomers (Δ-mer and Λ-mer).\n4. Total stereoisomers = 2 (from fac) + 2 (from mer) = 4 stereoisomers (2 pairs of enantiomers)."
    },
    // Q26
    {
        question_id: 26,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "What type of isomerism is demonstrated by the pair:\n$[(\\text{NH}_3)_5\\text{Co}-\\text{SCN}]\\text{Cl}_2$ and $[(\\text{NH}_3)_5\\text{Co}-\\text{NCS}]\\text{Cl}_2$?",
        options: [
            "Coordination isomerism",
            "Linkage isomerism",
            "Ionization isomerism",
            "Solvate isomerism"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. The thiocyanate ion (SCN^-) is an ambidentate ligand that can coordinate through either the sulfur atom (-SCN, thiocyanato-S) or the nitrogen atom (-NCS, isothiocyanato-N).\n2. Because the two complex salts differ solely in the donor atom by which the ambidentate ligand is linked to the cobalt ion, they represent linkage isomers."
    },
    // Q27
    {
        question_id: 27,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Which of the following statements is FALSE regarding $trans\\text{-}[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$?",
        options: [
            "It has a center of inversion ($i$)",
            "It possesses a horizontal mirror plane ($\\sigma_h$)",
            "It rotates plane-polarized light",
            "It is green in color"
        ],
        correctAnswer: 2,
        correctOption: "c",
        explanation: "1. trans-[Co(en)2Cl2]^+ possesses an inversion center (i) and mirror planes, making it an achiral molecule.\n2. Achiral molecules cannot rotate the plane of plane-polarized light and are strictly optically inactive.\n3. Therefore, the statement 'It rotates plane-polarized light' is FALSE (whereas the cis-isomer is purple and optically active, and the trans-isomer is green and optically inactive)."
    },
    // Q28
    {
        question_id: 28,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "How many geometrical isomers are possible for the square planar complex $[\\text{Pt}(\\text{NH}_3)(\\text{NH}_2\\text{OH})(\\text{py})(\\text{NO}_2)]^+$?",
        options: [
            "$2$",
            "$3$",
            "$4$",
            "$6$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. The complex is of the type [Mabcd], where M is Pt(II) (square planar) and all four ligands are distinct monodentate ligands.\n2. By holding one ligand (e.g., NH3) at a fixed vertex, each of the other three ligands (NH2OH, py, NO2) can be placed trans to it in turn.\n3. This yields exactly 3 distinct geometrical isomers (none of which are optically active because the molecular plane is a plane of symmetry)."
    },
    // Q29
    {
        question_id: 29,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "The type of isomerism shown by $[(\\text{NH}_3)_4\\text{Co}(\\text{OH})_2\\text{Co}(\\text{NH}_3)_4]\\text{Cl}_4$ and $[(\\text{NH}_3)_3\\text{ClCo}(\\text{OH})_2\\text{Co}(\\text{NH}_3)_3\\text{Cl}]\\text{Cl}_2$ is:",
        options: [
            "Coordination position isomerism",
            "Ionization isomerism",
            "Ligand isomerism",
            "Optical isomerism"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. Coordination position isomerism is a special type of isomerism observed in polynuclear (bridged) coordination complexes.\n2. It arises from the different arrangement or distribution of non-bridging ligands around the two metal centers.\n3. In the first compound, the terminal ligands are distributed as (NH3)4 on both cobalt centers. In the second, chloride ions have migrated into the inner coordination spheres, distributing as (NH3)3Cl on each cobalt center.\n4. Hence, this represents coordination position isomerism."
    },
    // Q30
    {
        question_id: 30,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Ligand isomerism is observed in complexes containing ligands like:",
        options: [
            "$1,2$-diaminopropane and $1,3$-diaminopropane",
            "$\\text{NH}_3$ and $\\text{H}_2\\text{O}$",
            "$\\text{Cl}^-$ and $\\text{Br}^-$",
            "$\\text{CN}^-$ and $\\text{NC}^-$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. Ligand isomerism arises when the coordinated ligand itself exists in isomeric forms.\n2. 1,2-diaminopropane (propylene diamine, pn, CH3-CH(NH2)-CH2-NH2) and 1,3-diaminopropane (trimethylene diamine, tn, H2N-CH2-CH2-CH2-NH2) are position isomers of each other.\n3. Complexes coordinating these two ligands exhibit ligand isomerism."
    },
    // Q31
    {
        question_id: 31,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "For the complex $[\\text{Fe}(\\text{CN})_6]^{3-}$, the number of optical isomers is:",
        options: [
            "$0$ (achiral)",
            "$2$",
            "$3$",
            "$4$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. [Fe(CN)6]^3- is a homoleptic octahedral complex of the type [Ma6].\n2. It belongs to the highly symmetric Oh point group, possessing an inversion center (i), multiple C4, C3, and C2 axes, and 9 planes of symmetry (σ).\n3. Because of these symmetry elements, it is superimposable on its mirror image (achiral) and has 0 optical isomers."
    },
    // Q32
    {
        question_id: 32,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "The presence of which symmetry element guarantees optical inactivity in a coordination compound?",
        options: [
            "$C_2$ rotational axis",
            "$C_3$ rotational axis",
            "Alternating axis of symmetry ($S_n$, which includes $\\sigma$ and $i$)",
            "$C_1$ identity axis"
        ],
        correctAnswer: 2,
        correctOption: "c",
        explanation: "1. The necessary and sufficient criterion for optical inactivity (achirality) in stereochemistry is the presence of an improper rotation axis (also known as an alternating axis of symmetry, Sn).\n2. An improper axis of order 1 is a mirror plane (S1 = σ), and an improper axis of order 2 is a center of inversion (S2 = i).\n3. Any molecule possessing an Sn axis is non-chiral and optically inactive."
    },
    // Q33
    {
        question_id: 33,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "What is the relationship between the two structures of $[\\text{Co}(\\text{en})_3]^{3+}$ having $\\Delta$ and $\\Lambda$ configurations?",
        options: [
            "Diastereomers",
            "Non-superimposable mirror images (enantiomers)",
            "Conformational isomers",
            "Linkage isomers"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. [Co(en)3]^3+ is of the type [M(AA)3] and belongs to the D3 point group.\n2. It has three bidentate rings arranged like the blades of a propeller.\n3. The right-handed helix is designated as the Δ (delta) isomer, and the left-handed helix is designated as the Λ (lambda) isomer.\n4. These two forms are non-superimposable mirror images of each other (enantiomers), rotating plane-polarized light in equal and opposite directions."
    },
    // Q34
    {
        question_id: 34,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "How many geometrical isomers are possible for $[\\text{Ma}_2\\text{b}_2\\text{cd}]$?",
        options: [
            "$4$",
            "$6$",
            "$8$",
            "$10$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. For [Ma2b2cd], the geometrical isomers can be deduced by examining the trans pairs:\n   (1) a trans to a, b trans to b (c trans to d)\n   (2) a trans to a, b trans to c (b trans to d)\n   (3) b trans to b, a trans to c (a trans to d)\n   (4) a trans to b, a trans to b (c trans to d)\n   (5) a trans to b, a trans to c (b trans to d)\n   (6) a trans to b, a trans to d (b trans to c)\n2. This gives precisely 6 geometrical isomers."
    },
    // Q35
    {
        question_id: 35,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "How many stereoisomers does $mer\\text{-}[\\text{Co}(\\text{NH}_3)_3\\text{Cl}_3]$ possess?",
        options: [
            "It is a single achiral stereoisomer",
            "$2$ enantiomers",
            "$3$ diastereomers",
            "$4$ conformers"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. In mer-[Co(NH3)3Cl3], three identical ligands (either NH3 or Cl) lie in a meridian plane that passes through the metal center.\n2. The molecule belongs to the C2v point group and contains two vertical planes of symmetry (σv).\n3. Because it possesses internal planes of symmetry, it is superimposable on its mirror image (achiral) and does not exist as optical enantiomers.\n4. Hence, the mer-form constitutes a single achiral stereoisomer."
    },
    // Q36
    {
        question_id: 36,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Which of the following octahedral complexes exhibits the highest number of stereoisomers?",
        options: [
            "$[\\text{Pt}(\\text{py})(\\text{NH}_3)(\\text{NO}_2)(\\text{Cl})(\\text{Br})(\\text{I})]$",
            "$[\\text{Co}(\\text{en})_3]^{3+}$",
            "$[\\text{Cr}(\\text{NH}_3)_4\\text{Cl}_2]^+$",
            "$[\\text{Co}(\\text{ox})_3]^{3-}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. [Pt(py)(NH3)(NO2)(Cl)(Br)(I)] is an octahedral complex with six different monodentate ligands ([Mabcdef]).\n2. It has 15 geometrical isomers, every one of which is chiral and exists as a pair of enantiomers, yielding 30 stereoisomers (15 pairs of enantiomers).\n3. In comparison, [Co(en)3]^3+ has 2 stereoisomers, [Cr(NH3)4Cl2]^+ has 2 stereoisomers, and [Co(ox)3]^3- has 2 stereoisomers."
    },
    // Q37
    {
        question_id: 37,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "The complex $[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$ is reacted with thiourea ($\\text{tu}$). The $trans$-isomer reacts to yield $[\\text{Pt}(\\text{tu})_4]^{2+}$, whereas the $cis$-isomer gives $[\\text{Pt}(\\text{NH}_3)_2(\\text{tu})_2]^{2+}$. This chemical distinction test is known as:",
        options: [
            "Kurnakov test",
            "Lucas test",
            "Baeyer test",
            "Hinsberg test"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. Kurnakov's test (developed by Nikolai Kurnakov in 1893) is the classic chemical reaction used to distinguish between cis and trans isomers of square planar platinum(II) complexes of the type [PtA2X2].\n2. It relies on the strong trans-effect of thiourea (tu). In trans-[Pt(NH3)2Cl2], the trans-directing influence leads to substitution of all four ligands to yield [Pt(tu)4]^2+.\n3. In cis-[Pt(NH3)2Cl2], only the two chlorides are replaced, yielding [Pt(NH3)2(tu)2]^2+ (which precipitates as a yellow salt)."
    },
    // Q38
    {
        question_id: 38,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Which among the following compounds will produce a precipitate with $\\text{AgNO}_3$ that dissolves in dilute nitric acid?",
        options: [
            "$[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{CO}_3$",
            "$[\\text{Co}(\\text{NH}_3)_5\\text{CO}_3]\\text{Br}$",
            "$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{SO}_4$",
            "$[\\text{Pt}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}_2$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. [Co(NH3)5Br]CO3 has an uncoordinated carbonate ion (CO3^2-) in its outer sphere.\n2. When treated with aqueous AgNO3, it precipitates silver carbonate (Ag2CO3): 2 Ag^+ + CO3^2- -> Ag2CO3↓.\n3. Silver carbonate readily dissolves in dilute nitric acid with brisk effervescence of carbon dioxide: Ag2CO3 + 2 HNO3 -> 2 AgNO3 + H2O + CO2↑.\n4. In contrast, AgBr and AgCl precipitated from bromide/chloride salts are insoluble in dilute nitric acid."
    },
    // Q39
    {
        question_id: 39,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "A complex with empirical formula $\\text{PtCl}_4 \\cdot 2\\text{KCl}$ does not conduct electric current when dissolved in non-polar solvent, but in water gives $3$ ions. Its correct formulation is:",
        options: [
            "$\\text{K}_2[\\text{PtCl}_6]$",
            "$[\\text{PtCl}_4]\\cdot 2\\text{KCl}$",
            "$[\\text{Pt}(\\text{KCl})_2\\text{Cl}_4]$",
            "$\\text{K}[\\text{PtCl}_5]\\cdot\\text{KCl}$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. The formula PtCl4·2KCl contains Pt, 6 Cl, and 2 K.\n2. In aqueous solution, it produces 3 ions per formula unit: two potassium cations (2 K^+) and one octahedral hexachloroplatinate(IV) complex anion ([PtCl6]^2-).\n3. Hence, according to Werner's coordination theory, its correct formulation is K2[PtCl6]."
    },
    // Q40
    {
        question_id: 40,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Which of the following compounds displays spin-crossover (spin state) isomerism under changing temperature conditions?",
        options: [
            "$[\\text{Fe}(\\text{phen})_2(\\text{NCS})_2]$",
            "$[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$",
            "$[\\text{Ni}(\\text{CO})_4]$",
            "$[\\text{Cu}(\\text{H}_2\\text{O})_4]\\text{SO}_4$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. Spin-crossover (SCO) isomerism occurs in transition metal complexes (typically d4-d7, notably Fe(II) d6) where the ligand field splitting energy Δo is very close to the mean pairing energy P (Δo ≈ P).\n2. [Fe(phen)2(NCS)2] (phen = 1,10-phenanthroline) is a benchmark spin-crossover system.\n3. At low temperatures (below ~176 K), it exists in the diamagnetic low-spin state (t2g^6 eg^0, S = 0). Upon warming above 176 K, thermal energy drives transition to the paramagnetic high-spin state (t2g^4 eg^2, S = 2)."
    },
    // Q41
    {
        question_id: 41,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "In an octahedral complex $[\\text{M(AA)}\\text{b}_2\\text{c}_2]$, where $\\text{AA}$ is a symmetrical bidentate ligand, the number of geometrical isomers is:",
        options: [
            "$2$",
            "$3$",
            "$4$",
            "$5$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. The symmetrical bidentate ligand AA must span cis coordination sites.\n2. The remaining four positions accommodate two 'b' and two 'c' monodentate ligands.\n3. Exactly 3 geometrical isomers are possible:\n   (1) trans-b, cis-c\n   (2) trans-c, cis-b\n   (3) cis-b, cis-c (all-cis)\n4. Number of geometrical isomers = 3."
    },
    // Q42
    {
        question_id: 42,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "How many of the geometrical isomers of $[\\text{M(AA)}\\text{b}_2\\text{c}_2]$ are optically active?",
        options: [
            "$1$",
            "$2$",
            "$3$",
            "$All\\ 3$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. Out of the 3 geometrical isomers of [M(AA)b2c2]:\n   - trans-b, cis-c has a plane of symmetry (achiral).\n   - trans-c, cis-b has a plane of symmetry (achiral).\n   - cis-b, cis-c lacks any plane or center of inversion; it is chiral and exists as a pair of 2 enantiomers (d and l forms).\n2. When evaluated as enantiomeric optical forms, there are 2 optically active isomers (the d and l enantiomers of the cis-b, cis-c form)."
    },
    // Q43
    {
        question_id: 43,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Total number of stereoisomers for $[\\text{M(AA)}\\text{b}_2\\text{c}_2]$ is:",
        options: [
            "$4$",
            "$5$",
            "$6$",
            "$3$"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. [M(AA)b2c2] gives 3 geometrical isomers.\n2. Two of these geometrical isomers (trans-b and trans-c) are achiral, contributing 2 stereoisomers.\n3. The third geometrical isomer (cis-b, cis-c) is chiral and exists as a pair of non-superimposable enantiomers (d and l), contributing 2 stereoisomers.\n4. Total number of stereoisomers = 2 + 2 = 4."
    },
    // Q44
    {
        question_id: 44,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "A square planar complex of the type $[\\text{Mabcd}]$ forms how many geometrical isomers?",
        options: [
            "$2$",
            "$3$",
            "$4$",
            "$6$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. In a square planar geometry, fixing reference ligand 'a' at one vertex allows ligands 'b', 'c', and 'd' each to be placed trans to 'a' in three distinct geometric arrangements:\n   - Isomer 1: a trans to b (c trans to d)\n   - Isomer 2: a trans to c (b trans to d)\n   - Isomer 3: a trans to d (b trans to c)\n2. Exactly 3 geometrical isomers are formed."
    },
    // Q45
    {
        question_id: 45,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Which pair of isomers displays identical dipole moments?",
        options: [
            "$cis\\text{-}[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$ and $trans\\text{-}[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$",
            "$d\\text{-}[\\text{Co}(\\text{en})_3]^{3+}$ and $l\\text{-}[\\text{Co}(\\text{en})_3]^{3+}$",
            "$fac\\text{-}[\\text{Co}(\\text{NH}_3)_3(\\text{NO}_2)_3]$ and $mer\\text{-}[\\text{Co}(\\text{NH}_3)_3(\\text{NO}_2)_3]$",
            "$cis\\text{-}[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$ and $trans\\text{-}[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. Enantiomers (d and l forms of chiral complexes) are non-superimposable mirror images of each other.\n2. Because their spatial structures are isometric (exact mirror reflections), all scalar physical properties—including magnitude of dipole moment, melting point, density, and refractive index—are strictly identical.\n3. In contrast, diastereomers/geometrical isomers (such as cis and trans, or fac and mer) have different bond vector arrangements and different dipole moments (e.g. trans-[Pt(NH3)2Cl2] has μ = 0 D, while cis has μ > 0)."
    },
    // Q46
    {
        question_id: 46,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "An octahedral complex $[\\text{Ma}_4\\text{bc}]$ shows how many geometrical isomers?",
        options: [
            "$1$",
            "$2$",
            "$3$",
            "$4$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. In [Ma4bc], the relative positions of the two distinct ligands 'b' and 'c' define the geometry:\n   - cis-isomer: Ligand 'b' and ligand 'c' are adjacent to each other (b-M-c angle = 90°).\n   - trans-isomer: Ligand 'b' and ligand 'c' are directly opposite each other (b-M-c angle = 180°).\n2. Exactly 2 geometrical isomers exist (both are achiral due to planes of symmetry)."
    },
    // Q47
    {
        question_id: 47,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "How many geometrical isomers are formed by $[\\text{Ma}_3\\text{bcd}]$?",
        options: [
            "$3$",
            "$4$",
            "$5$",
            "$6$"
        ],
        correctAnswer: 2,
        correctOption: "c",
        explanation: "1. In [Ma3bcd], the three 'a' ligands can be arranged either facially or meridionally:\n   - When 'a3' is facial (fac): The other three vertices (b, c, d) also form a facial triangle. All three are cis to each other; fixing their positions gives 1 geometrical arrangement (facial).\n   - When 'a3' is meridional (mer): Two 'a' ligands are trans to each other, and the third 'a' lies in the plane. The position trans to the third 'a' can be occupied by:\n     * ligand 'b' (c trans to d)\n     * ligand 'c' (b trans to d)\n     * ligand 'd' (b trans to c)\n     Plus permutations of the remaining pairs.\n2. Total geometrical isomers for [Ma3bcd] = 5."
    },
    // Q48
    {
        question_id: 48,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "The compound $[\\text{Pt}(\\text{py})_4][\\text{PtCl}_4]$ and $[\\text{Pt}(\\text{py})_3\\text{Cl}][\\text{Pt}(\\text{py})\\text{Cl}_3]$ are examples of:",
        options: [
            "Coordination isomers",
            "Ionization isomers",
            "Linkage isomers",
            "Polymerization isomers"
        ],
        correctAnswer: 0,
        correctOption: "a",
        explanation: "1. Both compounds consist of a complex cation and a complex anion of platinum(II).\n2. They differ in the distribution of the pyridine (py) and chloride (Cl^-) ligands between the cationic and anionic coordination spheres.\n3. Such interchange of ligands between two coordination spheres represents coordination isomerism."
    },
    // Q49
    {
        question_id: 49,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "If a coordination entity contains two ambidentate ligands, such as $[\\text{Co}(\\text{NH}_3)_4(\\text{NO}_2)_2]^+$, how many linkage isomers can exist in total?",
        options: [
            "$2$",
            "$3$ ($\\text{NO}_2/\\text{NO}_2$, $\\text{NO}_2/\\text{ONO}$, $\\text{ONO}/\\text{ONO}$)",
            "$4$",
            "$5$"
        ],
        correctAnswer: 1,
        correctOption: "b",
        explanation: "1. Each NO2^- ligand can coordinate via nitrogen (-NO2, nitro) or via oxygen (-ONO, nitrito).\n2. For two such ligands, the possible linkage combinations are:\n   (1) Both coordinated via nitrogen: [Co(NH3)4(NO2)2]^+ (dinitro)\n   (2) One via nitrogen and one via oxygen: [Co(NH3)4(NO2)(ONO)]^+ (nitronitrito)\n   (3) Both coordinated via oxygen: [Co(NH3)4(ONO)2]^+ (dinitrito)\n3. Exactly 3 linkage isomers can exist."
    },
    // Q50
    {
        question_id: 50,
        subject: "Chemistry",
        class: "Class 12",
        chapter: "Co-ordination Compounds",
        topic: "Co-ordination Compounds",
        subTopic: "Isomerism",
        exam: "NEET (UG) / JEE Advanced",
        difficulty: "Difficult",
        question: "Which of the following compounds cannot exhibit optical isomerism under any circumstance?",
        options: [
            "$[\\text{Cr}(\\text{ox})_3]^{3-}$",
            "$[\\text{Co}(\\text{en})_3]^{3+}$",
            "$cis\\text{-}[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$",
            "$cis\\text{-}[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$"
        ],
        correctAnswer: 2,
        correctOption: "c",
        explanation: "1. cis-[Pt(NH3)2Cl2] is a square planar complex.\n2. In all square planar complexes with unidentate ligands, the metal atom and all four donor atoms lie in a single plane.\n3. This molecular plane functions as a horizontal mirror plane of symmetry (σh).\n4. Because of this inherent plane of symmetry, cis-[Pt(NH3)2Cl2] is achiral and cannot exhibit optical isomerism under any circumstance.\n5. In contrast, [Cr(ox)3]^3-, [Co(en)3]^3+, and cis-[Co(en)2Cl2]^+ are octahedral chiral complexes that display optical isomerism."
    }
];

async function main() {
    console.log("=== INSERTING 50 COORDINATION ISOMERISM MCQs (Q1-Q50) ===");
    console.log(`Total questions to process: ${isomerismQuestions50.length}`);

    // Map to MongoDB document format
    const dbDocs = isomerismQuestions50.map(q => ({
        _id: new ObjectId().toString(),
        subject: q.subject,
        class: q.class || "Class 12",
        chapter: q.chapter,
        topic: q.topic,
        subTopic: q.subTopic,
        questionType: "MCQ (Multiple Choice Question)",
        type: "MCQ",
        difficulty: q.difficulty,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        tags: ["Chemistry", "Co-ordination Compounds", "Isomerism", "NEET", "JEE Advanced"],
        source: "NEET_ADVANCED_ISOMERISM_50",
        status: "Active",
        cognitiveLevel: "Application",
        exam: q.exam,
        targetExams: ["NEET", "JEE Main", "JEE Advanced"],
        createdAt: new Date(),
        updatedAt: new Date()
    }));

    // Save JSON backup
    const jsonPath = 'coordination_isomerism_50_questions.json';
    fs.writeFileSync(jsonPath, JSON.stringify(isomerismQuestions50, null, 2), 'utf8');
    console.log(`✓ Wrote complete JSON backup to ${jsonPath}`);

    // Connect to MongoDB
    console.log("Connecting to MongoDB...");
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();
    const col = db.collection("questionBank");

    const initialTotal = await col.countDocuments();
    const initialChapter = await col.countDocuments({ chapter: "Co-ordination Compounds" });
    const initialIsomerism = await col.countDocuments({ 
        chapter: "Co-ordination Compounds", 
        subTopic: "Isomerism" 
    });
    console.log(`Initial total in questionBank: ${initialTotal}`);
    console.log(`Initial count in chapter 'Co-ordination Compounds': ${initialChapter}`);
    console.log(`Initial count in subTopic 'Isomerism': ${initialIsomerism}`);

    console.log(`Inserting ${dbDocs.length} questions into questionBank...`);
    const insertResult = await col.insertMany(dbDocs);
    console.log(`✓ Successfully inserted ${insertResult.insertedCount} questions!`);

    const finalTotal = await col.countDocuments();
    const finalChapter = await col.countDocuments({ chapter: "Co-ordination Compounds" });
    const finalIsomerism = await col.countDocuments({ 
        chapter: "Co-ordination Compounds", 
        subTopic: "Isomerism" 
    });
    const finalDifficultChapter = await col.countDocuments({ 
        chapter: "Co-ordination Compounds", 
        difficulty: "Difficult" 
    });

    console.log(`New total in questionBank: ${finalTotal}`);
    console.log(`New count in chapter 'Co-ordination Compounds': ${finalChapter}`);
    console.log(`New count in subTopic 'Isomerism': ${finalIsomerism}`);
    console.log(`Difficult questions in chapter 'Co-ordination Compounds': ${finalDifficultChapter}`);

    await client.close();
}

main().catch(err => {
    console.error("Execution failed:", err);
    process.exit(1);
});
