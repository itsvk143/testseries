const fs = require("fs");
const path = require("path");

const STANDARD_AR_OPTIONS = [
  "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
  "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
  "Assertion (A) is true but Reason (R) is false.",
  "Assertion (A) is false but Reason (R) is true."
];

function ar(assertion, reason, correctAnswer, explanation) {
  return {
    type: "ASSERTION_REASON",
    question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${assertion}\nReason (R): ${reason}`,
    options: STANDARD_AR_OPTIONS,
    correctAnswer,
    explanation,
    subTopic: "Nomenclature",
    chapter: "Organic Compounds Containing Halogens"
  };
}

function mcq(question, options, correctAnswer, explanation) {
  return {
    type: "MCQ",
    question,
    options,
    correctAnswer,
    explanation,
    subTopic: "Nomenclature",
    chapter: "Organic Compounds Containing Halogens"
  };
}

function num(question, correctAnswer, explanation) {
  return {
    type: "NUMERICAL",
    question,
    options: [],
    correctAnswer: String(correctAnswer),
    explanation,
    subTopic: "Nomenclature",
    chapter: "Organic Compounds Containing Halogens"
  };
}

const questions = [
  // 13 AR Questions
  ar(
    "The IUPAC name of $\\text{CH}_2=\\text{CH}-\\text{CH}_2\\text{Cl}$ is 3-chloroprop-1-ene and not 1-chloroprop-2-ene.",
    "In the IUPAC rules, a carbon-carbon double bond receives numbering priority over a halogen substituent.",
    0,
    "Principal functional groups and unsaturations (alkenes/alkynes) have higher priority for lowest numbering locants than halo substituents, which are always treated as simple prefixes."
  ),
  ar(
    "Ethylidene chloride ($\\text{CH}_3\\text{CHCl}_2$) is an example of a geminal dihalide.",
    "Geminal dihalides have both halogen atoms attached to the same carbon atom.",
    0,
    "Dihaloalkanes in which both halogen atoms are attached to the same carbon atom are termed gem-dihalides or alkylidene dihalides. $\\text{CH}_3\\text{CHCl}_2$ is 1,1-dichloroethane (ethylidene chloride)."
  ),
  ar(
    "Ethylene dichloride ($\\text{Cl}-\\text{CH}_2-\\text{CH}_2-\\text{Cl}$) is designated as a vicinal dihalide.",
    "Vicinal dihalides have halogen atoms attached to adjacent carbon atoms.",
    0,
    "Dihalides with halogens on two adjacent carbons are vic-dihalides or alkylene dihalides. 1,2-dichloroethane is commonly known as ethylene dichloride."
  ),
  ar(
    "In naming polyhaloalkanes with different halogens, substituents are cited in alphabetical order regardless of their position.",
    "IUPAC nomenclature dictates that prefix substituents are listed alphabetically (bromo before chloro before fluoro before iodo).",
    0,
    "Prefixes denoting substituents are arranged in alphabetical order (e.g., 'bromo' precedes 'chloro') when constructing the IUPAC name, although numbering follows the lowest locant rule."
  ),
  ar(
    "The compound $(\\text{CH}_3)_3\\text{C}-\\text{CH}_2\\text{Br}$ is called neopentyl bromide in common nomenclature.",
    "Neopentyl group consists of a quaternary carbon bonded to three methyl groups and one $-\\text{CH}_2-$ unit.",
    0,
    "Common name for 1-bromo-2,2-dimethylpropane is neopentyl bromide, where the 2,2-dimethylpropyl skeleton is known as the neopentyl group."
  ),
  ar(
    "Benzyl chloride is classified as an aryl halide.",
    "The halogen atom in benzyl chloride is attached directly to an aromatic ring carbon.",
    3,
    "Assertion is false, Reason is false. In benzyl chloride ($\\text{C}_6\\text{H}_5\\text{CH}_2\\text{Cl}$), the halogen is attached to an $sp^3$ hybridized benzylic carbon adjacent to the ring, so it is an aralkyl (benzylic) halide, not an aryl halide."
  ),
  ar(
    "The IUPAC name of $\\text{CH}_3\\text{CH(Br)CH}_2\\text{CH}_3$ is 2-bromobutane.",
    "Numbering of the carbon chain begins from the end that gives the lowest locant to the halogen substituent.",
    0,
    "Numbering from left to right gives the bromine substituent locant 2 (rather than 3 from the right). Thus, the IUPAC name is 2-bromobutane."
  ),
  ar(
    "Allyl chloride is classified as an allylic halide.",
    "The halogen atom is bonded to an $sp^3$ hybridized carbon atom adjacent to a carbon-carbon double bond.",
    0,
    "Allylic halides have the halogen atom attached to an $sp^3$ hybridized carbon that is directly bonded to an $sp^2$ carbon of a $\\text{C}=\\text{C}$ double bond."
  ),
  ar(
    "The common name of 2-chloropropane is isopropyl chloride.",
    "The secondary carbon attached to chlorine is bonded to two identical methyl groups.",
    0,
    "The $(\\text{CH}_3)_2\\text{CH}-$ group is known as isopropyl. Thus, $(\\text{CH}_3)_2\\text{CHCl}$ is isopropyl chloride in common nomenclature."
  ),
  ar(
    "The IUPAC name of $\\text{CHF}_3$ is trifluoromethane.",
    "Three fluorine atoms attached to a single carbon atom are designated by the multiplicative prefix 'tri-'.",
    0,
    "$\\text{CHF}_3$ is derived from methane by substituting three hydrogen atoms with fluorine, hence trifluoromethane (commonly known as fluoroform)."
  ),
  ar(
    "The IUPAC name of chlorobenzene is chlorobenzene.",
    "For monosubstituted benzene derivatives, the substituent prefix is placed directly before the word 'benzene'.",
    0,
    "According to IUPAC rules, monosubstituted haloarenes are named simply by prefixing 'halo' to 'benzene'."
  ),
  ar(
    "1-Bromo-2-chloroethane and 1,1-dichloroethane are position isomers.",
    "They differ in the relative positions of the halogen atoms on the same carbon chain.",
    0,
    "1,2-dihalo and 1,1-dihaloalkanes have the same molecular formula and carbon skeleton but different positions of the halogen substituents, making them position isomers."
  ),
  ar(
    "The common name of $\\text{CH}_2\\text{Cl}_2$ is methylene chloride.",
    "The divalent group $-\\text{CH}_2-$ is known as the methylene group.",
    0,
    "The $-\\text{CH}_2-$ unit is the methylene group. Hence, $\\text{CH}_2\\text{Cl}_2$ is commonly named methylene chloride (IUPAC: dichloromethane)."
  ),

  // 9 MCQs
  mcq(
    "What is the IUPAC name of the compound $(\\text{CH}_3)_3\\text{C}-\\text{CH}_2\\text{Br}$?",
    [
      "1-Bromo-2,2-dimethylpropane",
      "2,2-Dimethyl-3-bromopropane",
      "tert-Butyl bromomethane",
      "Neopentyl bromide"
    ],
    0,
    "The longest carbon chain contains 3 carbons (propane). Numbering from the end with the bromo group gives 1-bromo-2,2-dimethylpropane. Neopentyl bromide is the common name."
  ),
  mcq(
    "Which of the following is a vinylic halide?",
    [
      "$\\text{CH}_2=\\text{CH}-\\text{Cl}$",
      "$\\text{CH}_2=\\text{CH}-\\text{CH}_2\\text{Cl}$",
      "$\\text{C}_6\\text{H}_5\\text{CH}_2\\text{Cl}$",
      "$\\text{CH}_3\\text{CH}_2\\text{Cl}$"
    ],
    0,
    "In vinylic halides, the halogen atom is bonded directly to an $sp^2$ hybridized carbon of a carbon-carbon double bond, as in chloroethene (vinyl chloride)."
  ),
  mcq(
    "What is the correct IUPAC name of $\\text{CH}_3-\\text{CH}(\\text{Cl})-\\text{CH}(\\text{Br})-\\text{CH}_3$?",
    [
      "2-Bromo-3-chlorobutane",
      "3-Bromo-2-chlorobutane",
      "2-Chloro-3-bromobutane",
      "3-Chloro-2-bromobutane"
    ],
    0,
    "Both numbering directions give locants 2 and 3. Alphabetical priority dictates that 'bromo' receives the lower locant 2. Thus, 2-bromo-3-chlorobutane."
  ),
  mcq(
    "Which of the following compounds is a geminal dihalide?",
    [
      "1,1-Dichloropropane",
      "1,2-Dichloropropane",
      "1,3-Dichloropropane",
      "1,4-Dichlorobutane"
    ],
    0,
    "In a geminal dihalide (gem-dihalide), both halogen atoms are located on the same carbon atom, as in 1,1-dichloropropane."
  ),
  mcq(
    "What is the IUPAC name of the compound $\\text{HC}\\equiv\\text{C}-\\text{CH}_2\\text{Br}$?",
    [
      "3-Bromoprop-1-yne",
      "1-Bromoprop-2-yne",
      "3-Bromopropyne",
      "Propargyl bromide"
    ],
    0,
    "The triple bond has higher numbering priority than the bromo substituent. Numbering starts from the alkyne end: $\\text{C}1\\equiv\\text{C}2-\\text{C}3(\\text{Br})$, yielding 3-bromoprop-1-yne (common name: propargyl bromide)."
  ),
  mcq(
    "The correct IUPAC name of DDT is:",
    [
      "1,1,1-Trichloro-2,2-bis(4-chlorophenyl)ethane",
      "2,2-Bis(p-chlorophenyl)-1,1,1-trichloroethane",
      "p,p'-Dichlorodiphenyltrichloroethane",
      "1,1-Bis(4-chlorophenyl)-2,2,2-trichloroethane"
    ],
    0,
    "According to IUPAC rules, the parent alkane chain is ethane: C1 has three chlorines (1,1,1-trichloro) and C2 has two 4-chlorophenyl rings: 1,1,1-trichloro-2,2-bis(4-chlorophenyl)ethane."
  ),
  mcq(
    "Which of the following represents an allylic halide?",
    [
      "3-Chlorocyclohex-1-ene",
      "1-Chlorocyclohex-1-ene",
      "Chlorobenzene",
      "Chlorocyclohexane"
    ],
    0,
    "In 3-chlorocyclohex-1-ene, the chlorine is bonded to an $sp^3$ ring carbon directly adjacent to the endocyclic $\\text{C}=\\text{C}$ double bond, making it an allylic halide."
  ),
  mcq(
    "The IUPAC name of $\\text{CH}_3\\text{C}(\\text{Cl})_2\\text{CH}_3$ is:",
    [
      "2,2-Dichloropropane",
      "1,1-Dichloropropane",
      "Isopropylidene chloride",
      "2,2-Chloropropane"
    ],
    0,
    "The two chlorine atoms are attached to carbon-2 of propane, hence 2,2-dichloropropane (a geminal dihalide)."
  ),
  mcq(
    "What is the IUPAC name of $\\text{C}_6\\text{H}_5-\\text{CH}_2-\\text{Cl}$?",
    [
      "Chloromethylbenzene",
      "Benzyl chloride",
      "Phenylchloromethane",
      "$\\alpha$-Chlorotoluene"
    ],
    0,
    "By current IUPAC recommendations, the compound is treated as a substituted benzene derivative: chloromethylbenzene (or chlorophenylmethane with methane as parent). Benzyl chloride is its common name."
  ),

  // 3 Numerical Questions
  num(
    "How many positional isomers of dibromobutane ($\\text{C}_4\\text{H}_8\\text{Br}_2$) can be formed on an unbranched butane carbon chain?",
    6,
    "On a straight 4-carbon chain, the positions of two bromine atoms can be: 1,1-dibromobutane, 1,2-dibromobutane, 1,3-dibromobutane, 1,4-dibromobutane, 2,2-dibromobutane, and 2,3-dibromobutane. Total = 6."
  ),
  num(
    "How many total carbon atoms are present in the parent continuous carbon chain of neopentyl bromide according to IUPAC rules?",
    3,
    "Neopentyl bromide is $(\\text{CH}_3)_3\\text{C}-\\text{CH}_2\\text{Br}$. The longest continuous carbon chain contains 3 carbons (propane skeleton, 1-bromo-2,2-dimethylpropane)."
  ),
  num(
    "How many chlorine atoms are present in a molecule of hexachloroethane?",
    6,
    "Hexachloroethane has molecular formula $\\text{C}_2\\text{Cl}_6$, containing exactly 6 chlorine atoms substituted on ethane."
  )
];

console.log(`Part 2 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_halogens_part2.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_halogens_part2.js");
